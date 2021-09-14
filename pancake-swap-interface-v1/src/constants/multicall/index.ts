import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x323d757f1B7cE07ba967be1238e7F9f2f153fD0E', // TODO
  [ChainId.BSCTESTNET]: '0x5cf89F6159CF12735FbB3AF61EB7290AD8e7563A'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
