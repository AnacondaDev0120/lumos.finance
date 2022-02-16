import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 2,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
  //   },
  //   token: serializedTokens.ada,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BAND-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xc639187ef82271d8f517de6feae4faf5b517533c',
  //   },
  //   token: serializedTokens.band,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   token: serializedTokens.dot,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'EOS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
  //   },
  //   token: serializedTokens.eos,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'LINK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
  //   },
  //   token: serializedTokens.link,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
  //   },
  //   token: serializedTokens.twt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
  //   },
  //   token: serializedTokens.xvs,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 14,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
  //   },
  //   token: serializedTokens.eth,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 15,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
  //   },
  //   token: serializedTokens.btcb,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 16,
  //   lpSymbol: 'ALPHA-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4e0f3385d932F7179DeE045369286FFa6B03d887',
  //   },
  //   token: serializedTokens.alpha,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 17,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 18,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
  //   },
  //   token: serializedTokens.xrp,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 19,
  //   lpSymbol: 'ATOM-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2333c77fc0b2875c11409cdcd3c75d42d402e834',
  //   },
  //   token: serializedTokens.atom,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 20,
  //   lpSymbol: 'YFII-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x574a978c2d0d36d707a05e459466c7a1054f1210',
  //   },
  //   token: serializedTokens.yfii,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 21,
  //   lpSymbol: 'DAI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x56c77d59e82f33c712f919d09fceddf49660a829',
  //   },
  //   token: serializedTokens.dai,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 22,
  //   lpSymbol: 'XTZ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x5acac332f0f49c8badc7afd0134ad19d3db972e6',
  //   },
  //   token: serializedTokens.xtz,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 23,
  //   lpSymbol: 'BCH-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x54edd846db17f43b6e43296134ecd96284671e81',
  //   },
  //   token: serializedTokens.bch,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 24,
  //   lpSymbol: 'YFI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1',
  //   },
  //   token: serializedTokens.yfi,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 25,
  //   lpSymbol: 'UNI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9',
  //   },
  //   token: serializedTokens.uni,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 26,
  //   lpSymbol: 'FIL-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
  //   },
  //   token: serializedTokens.fil,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 27,
  //   lpSymbol: 'INJ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6',
  //   },
  //   token: serializedTokens.inj,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 29,
  //   lpSymbol: 'USDC-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x30479874f9320a62bce3bc0e315c920e1d73e278',
  //   },
  //   token: serializedTokens.usdc,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 30,
  //   lpSymbol: 'SXP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x752E713fB70E3FA1Ac08bCF34485F14A986956c4',
  //   },
  //   token: serializedTokens.sxp,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 32,
  //   lpSymbol: 'CTK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7793870484647a7278907498ec504879d6971EAb',
  //   },
  //   token: serializedTokens.ctk,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 34,
  //   lpSymbol: 'STAX-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7cd05f8b960ba071fdf69c750c0e5a57c8366500',
  //   },
  //   token: serializedTokens.stax,
  //   quoteToken: serializedTokens.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 35,
  //   lpSymbol: 'NAR-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x745c4fd226e169d6da959283275a8e0ecdd7f312',
  //   },
  //   token: serializedTokens.nar,
  //   quoteToken: serializedTokens.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 36,
  //   lpSymbol: 'NYA-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2730bf486d658838464a4ef077880998d944252d',
  //   },
  //   token: serializedTokens.nya,
  //   quoteToken: serializedTokens.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 38,
  //   lpSymbol: 'bROOBEE-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x970858016C963b780E06f7DCfdEf8e809919BcE8',
  //   },
  //   token: serializedTokens.broobee,
  //   quoteToken: serializedTokens.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'BAKE-BNB Bakery LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492',
  //   },
  //   token: serializedTokens.bake,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'BURGER-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
  //   },
  //   token: serializedTokens.burger,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'BAKE-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB',
  //   },
  //   token: serializedTokens.bake,
  //   quoteToken: serializedTokens.wbnb,
  // },
]

export default farms
