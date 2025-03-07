module.exports = {
  chainID: 'chihuahua-1',
  lcd: 'https://api.chihuahua.wtf',
  gasAdjustment: 2,
  gasPrices: { uhuahua: 1250 },
  prefix: 'chihuahua',
  coinType: '118',
  baseAsset: 'uhuahua',
  name: 'Chihuahua',
  icon: process.env.CF_PAGES_URL + '/img/chains/Huahua.png',
  channels: {
    'phoenix-1': 'channel-34',
    'juno-1': 'channel-11',
    'migaloo-1': 'channel-39',
    'osmosis-1': 'channel-7',
    'stafihub-1': 'channel-25',
  },
  explorer: {
    address: 'https://www.mintscan.io/chihuahua/account/{}',
    tx: 'https://www.mintscan.io/chihuahua/txs/{}',
    validator: 'https://www.mintscan.io/chihuahua/validators/{}',
    block: 'https://www.mintscan.io/chihuahua/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uhuahua',
      symbol: 'HUAHUA',
      name: 'Huahua',
      icon: process.env.CF_PAGES_URL + '/img/coins/Huahua.png',
      decimals: 6,
    },
    {
      token:
        'chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
      symbol: 'bHUAHUA',
      name: 'boneHUAHUA',
      icon: process.env.CF_PAGES_URL + '/img/coins/bHUAHUA.png',
      decimals: 6,
    },
    {
      token:
        'chihuahua1nktfhalzvtx82kyn4dh6l8htcl0prfpnu380a39zj52nzu3j467qqg23ry',
      symbol: 'ampHUAHUA',
      name: 'ampHUAHUA',
      decimals: 6,
    },
    {
      token: "chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef",
      name: "Puppy",
      symbol: "PUPPY",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/puppyhuahua_logo.png"
    }
  ],
}
