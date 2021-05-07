import PoolCard from './pool-card'

const Pools = () => {
  return (
    <div className="flex flex-wrap justify-center mb-24">
      <PoolCard stakedTokenSymbolDisplay="TECO" stakedTokenSymbols={['LUNA', 'MIR', 'ANC']} earnedToken="TECO" />
      <PoolCard stakedTokenSymbolDisplay="AWP" stakedTokenSymbols={['wMIR', 'SLV', 'LUNA', 'ETC']} earnedToken="AWP"  />
      <PoolCard stakedTokenSymbolDisplay="SAVE" stakedTokenSymbols={['UST', 'wMIR', 'SLV']} earnedToken="SAVE"  />
      <PoolCard stakedTokenSymbolDisplay="IND" stakedTokenSymbols={['QQQ', 'SPY', 'UST']} earnedToken="IND"  />
      <PoolCard stakedTokenSymbolDisplay="RISE" stakedTokenSymbols={['mCOIN', 'TSLA', 'ABNB']} earnedToken="RISE" />
    </div>
  )
}

export default Pools