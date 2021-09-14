import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5cf89F6159CF12735FbB3AF61EB7290AD8e7563A', // TODO
  [ChainId.BSCTESTNET]: '0x5cf89F6159CF12735FbB3AF61EB7290AD8e7563A'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
