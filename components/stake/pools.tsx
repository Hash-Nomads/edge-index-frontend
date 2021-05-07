import PoolCard from './pool-card'

const Pools = () => {
  return (
    <div className="flex flex-wrap justify-center -m-4">
      <PoolCard stakedTokenSymbolDisplay="ETF" stakedTokenSymbols={['LUNA', 'MIR', 'ANC']} earnedToken="ETF" />
      <PoolCard stakedTokenSymbolDisplay="ETF" stakedTokenSymbols={['LUNA', 'MIR', 'ANC', 'BNB']} earnedToken="ETF"  />
      <PoolCard stakedTokenSymbolDisplay="ETF" stakedTokenSymbols={['LUNA', 'ANC']} earnedToken="ETF"  />
      <PoolCard stakedTokenSymbolDisplay="BNB" stakedTokenSymbols={['BNB']} earnedToken="ETF"  />
      <PoolCard stakedTokenSymbolDisplay="ETH" stakedTokenSymbols={['ETH']} earnedToken="ETF" />
    </div>
  )
}

export default Pools