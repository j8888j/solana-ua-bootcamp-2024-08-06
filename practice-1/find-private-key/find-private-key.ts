import { Keypair } from "@solana/web3.js";

function findPrivateKeyForPrefix(prefix: string): Uint8Array {
  while (true) {
    const keys = Keypair.generate();
    const publicKey = keys.publicKey.toBase58();
    const privateKey = keys.secretKey;
    if (publicKey.startsWith(prefix)) {
      return privateKey;
    }
  }
}

const prefix = 'an';
const privateKey = findPrivateKeyForPrefix(prefix);
console.log(`Found private key for public key with "${prefix}" prefix:`, privateKey.toString());
