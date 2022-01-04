use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_program;

declare_id!("8xu128UDAoMJwVnowP2H4CikQT7G9MirF9hbUuTppuCc");

#[program]
pub mod solana_raspberry_pi_test {
    use super::*;
    pub fn store_quote(ctx: Context<StoreQuote>, quote: String) -> ProgramResult {
        let accountdata: &mut Account<Quote> = &mut ctx.accounts.data;
        let author: &Signer = &ctx.accounts.author;
        let clock: Clock = Clock::get().unwrap();

        if quote.chars().count() > DATA_ALLOCATION {
            return Err(ErrorCode::DataTooLong.into())
        }

        accountdata.author = *author.key;
        accountdata.timestamp = clock.unix_timestamp;
        accountdata.data = quote;

        Ok(())
    }
}

// account size allocation
// - distriminator: 8 bytes
// - pubkey: 32 bytes
// - timestamp: 8 bytes
// - string prefix to store length: 4 bytes
const DATA_ALLOCATION: usize = 80;
const ACCOUNT_SIZE: usize = 8 + 32 + 8 + 4 + DATA_ALLOCATION;

#[derive(Accounts)]
pub struct StoreQuote<'info> {
    #[account(init, payer = author, space = ACCOUNT_SIZE)]
    pub data: Account<'info, Quote>,
    #[account(mut)]
    pub author: Signer<'info>,
    #[account(address = system_program::ID)]
    pub system_program: AccountInfo<'info>,
}

#[account]
pub struct Quote {
    pub author: Pubkey,
    pub timestamp: i64,
    pub data: String,
}

#[error]
pub enum ErrorCode {
    #[msg("Data is too long.")]
    DataTooLong,
}