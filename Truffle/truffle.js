module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    KIM1: {
      // host: "node1.oleksii.pp.ua",
      // host: "104.46.46.39",
      host: "127.0.0.1",
      port: 22000,
      network_id: "10",
      gasPrice: 0,
      gas: 4612388
    },
    KIM2: {
      // host: "13.73.176.135",
      host: "127.0.0.1",
      port: 22000,
      network_id: "10",
      gasPrice: 0,
      gas: 4612388
    },
    KIM3: {
      host: "40.114.141.213",
      port: 22000,
      network_id: "10",
      gasPrice: 0,
      gas: 4612388
    },
    KIM4: {
      host: "node4.oleksii.pp.ua",
      port: 22000,
      network_id: "10",
      gasPrice: 0,
      gas: 4612388
    }
  }
}
