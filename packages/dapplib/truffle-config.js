require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note noble miss half cloth bone there'; 
let testAccounts = [
"0x89ce49c4b8ddd9f9fc6e49e36ab23f654e4ea2da81eda62910f8cc49452324bb",
"0x88693c5e1dbaf1509c07831f0886b8e030b7229e776f2680d859ebbe4cd9ee86",
"0xb1cd1a0c74f09bdb0bf7d4ba41fe54173aec9bb3d0a84794044edb8d9c9ad462",
"0x2c9154c8e19cab17fc0ac061d765e810b03ed4f33481a859a06e56233a4067b0",
"0xcadb99b0000504e75e398fe3791bd6f39283f6a94e7b90478ee282eb9fc1235b",
"0xd17c2b4646598d4896515e47465643c467fa752dbdb3ae802e13dc3fdab6065e",
"0x5a628deb0be068c3fa5dc8e7583be586626b1c9eae0ef1152454d751e3fad31d",
"0x9b8f7f400f40fcc2f978b1e8d13074026d48999c4073add884a1e9e2f39bf0ed",
"0x03d1100d4a19b1689e7411623449f59093a325881016f74b3c6c9fa26b4f169f",
"0x527b318a688528a9416ca4701b172664c41aef72ce9aeea9fd20b1631b5ee69a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

