import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolanaRaspberryPiTest } from '../target/types/solana_raspberry_pi_test';
import * as assert from "assert";

describe('solana-raspberry-pi-test', () => {

  // Configure the client to use the local cluster.
  // anchor.setProvider(anchor.Provider.env());
  // test on the local networked node
  anchor.setProvider(anchor.Provider.local("http://10.3.141.135:8899"));

  const program = anchor.workspace.SolanaRaspberryPiTest as Program<SolanaRaspberryPiTest>;

  it('can store data', async () => {
    const newDataAccount = anchor.web3.Keypair.generate();
    console.log('data account: ', newDataAccount.publicKey.toBase58())
    await program.rpc.storeQuote('separate data from programs, because data and instructions are very different.', {
        accounts: {
            data: newDataAccount.publicKey,
            author: program.provider.wallet.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
        },
        signers: [newDataAccount],
    });

    const dataAccount = await program.account.quote.fetch(newDataAccount.publicKey);

    assert.equal(dataAccount.author.toBase58(), program.provider.wallet.publicKey.toBase58());
    assert.ok(dataAccount.timestamp);
    assert.equal(dataAccount.data, 'separate data from programs, because data and instructions are very different.');
  });
});
