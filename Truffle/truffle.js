module.exports = {
  // solc: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 200
  //   }
  // },
  networks: {
    KIM1: {
      host: "127.0.0.1",
      port: 22000, // was 8545
      network_id: "20", // Match any network id
      // from: "0x30406721486d74bc93c169bc66a9a0c1e21f0a69",
      gasPrice: 0,
      gas: 4612388
    },
    KIM2: {
      host: "127.0.0.1",
      port: 22001, // was 8545
      network_id: "20", // Match any network id
      // from: "0xAuHEaGJvwuKe4LjRgz8JPMzB0rMnjBdBdUuDPyc1jEU=",
      gasPrice: 0,
      gas: 4612388
    },
    KIM3: {
      host: "127.0.0.1",
      port: 22002, // was 8545
      network_id: "20", // Match any network id
      // from: "0xAuHEaGJvwuKe4LjRgz8JPMzB0rMnjBdBdUuDPyc1jEU=",
      gasPrice: 0,
      gas: 4612388
    }
  },
  // rinkeby: {
  //   provider: function() {
  //     return new HDWalletProvider("my own mnemonic", "https://rinkeby.infura.io/xxxxx")
  //   },
  //   network_id: 3
  // }
}
