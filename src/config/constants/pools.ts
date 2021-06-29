import tokens from './tokens'
import { PoolCategory, PoolConfig } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.taal,
    earningToken: tokens.taal,
    contractAddress: {
      4: '0x37d9a669338aD2f9e5ae553017CD03d423b03b59',
      97: '0x124bDb941DF9fC548D99E21F727357e9c287772E',     // MasterChef
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
      1001: '0x0b7778B9a5104FcE601e8E0c7494818f97DE5A9d'
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
