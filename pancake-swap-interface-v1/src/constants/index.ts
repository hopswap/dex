import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap-libs/sdk'

export const ROUTER_ADDRESS = '0xBE7BE5f7dC74D62C414737059e5f31FA307e139c'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const HOP = new Token(ChainId.MAINNET, '0x0a924e1de39366ceac77f31bf4408008acf783ee', 18, 'HOP', 'Hopswap Token')
export const WHPB = new Token(ChainId.MAINNET, '0xfcb433edf9c343a23d97967700271c2a9e7958e1', 18, 'WHPB', 'Wrapped HPB Token')
export const HPBUSD = new Token(ChainId.MAINNET, '0xd4e3291c87d49cb0757b0f88272e8f589f130003', 18, 'HPBUSD', 'HPBUSD Token')

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
//  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], ],
 [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], HOP, WHPB, HPBUSD],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
//  [ChainId.BSCTESTNET]: {},
	[ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
//  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET]],
	[ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET],HOP, WHPB, HPBUSD],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
//  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET]],
	[ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET],HOP, WHPB, HPBUSD],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
// [ChainId.BSCTESTNET]: [
	[ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x0a924e1de39366ceac77f31bf4408008acf783ee', 18, 'HOP', 'HopSwap Token'),
      new Token(ChainId.MAINNET, '0xfcb433edf9c343a23d97967700271c2a9e7958e1', 18, 'WHPB', 'Wrapped HPB'),
    ],
    [WHPB, HOP],
    [HPBUSD, HOP],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
