require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area speak birth radar remain coconut coral light army gate'; 
let testAccounts = [
"0x36dd0e5ce914c9a57306daaf46142be952672703663f69f0329609193ea66424",
"0xebce44cba7b04221ad824a9d4cb2144d23b63bce46caf6a5268408aa6683e090",
"0x6b1c7810984f47b41c8a3f6aefddaa3e938464ed2ec48229e57df97b8f82968e",
"0x3a1a8e9da2211308ff1526738f07ed0d08f8d8b8b24779b497188332b3d8a1f5",
"0x10345cf1a2026ba0ba8195e46f3c198dcb4bf05906a4ba0a270979c4aa73f362",
"0xf13fb64d714d3a5ae50ab8f468571031b09d0080583493f411ad8475e618e4c6",
"0x7f541820030ef2a66e0998f8cd9bd8149f4a5cfc6edb29bbe35dd488814c84d6",
"0x16c6e842d6e8c07a8c1b1ef96bb5db60cb3bdccb16ff396623eae36b176d2822",
"0x5042c5796a4687ec234868428fab5884690524caa214091d1a860883ef99d414",
"0xc493c8707835e9572981b4b5e47fcc4f5a27e4c2f97b8407209ccec1f5f70e51"
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
            version: '^0.5.11'
        }
    }
};
