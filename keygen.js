const NodeRSA = require('node-rsa');
const fs = require('fs/promises');

async function generateKeyPair() {
  const key = new NodeRSA({ b: 2048 });  // Specify key size
  key.generateKeyPair();
  
  await Promise.all([
    fs.writeFile('public.key', key.exportKey('public')),
    fs.writeFile('private.key', key.exportKey('private'))
  ]);
}

generateKeyPair().catch(console.error);