import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolanaRaspberryPiTest } from '../target/types/solana_raspberry_pi_test';

describe('solana-raspberry-pi-test', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolanaRaspberryPiTest as Program<SolanaRaspberryPiTest>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
