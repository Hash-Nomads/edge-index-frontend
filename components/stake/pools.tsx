import PoolCard from './pool-card'

const Pools = () => {
  return (
    <div className="flex flex-wrap justify-center mb-24">
      <PoolCard stakedTokenSymbolDisplay="TECO" earnedToken="TECO" />
      <PoolCard stakedTokenSymbolDisplay="AWP" earnedToken="AWP"  />
      <PoolCard stakedTokenSymbolDisplay="SAVE" earnedToken="SAVE"  />
      <PoolCard stakedTokenSymbolDisplay="IND" earnedToken="IND"  />
      <PoolCard stakedTokenSymbolDisplay="RISE" earnedToken="RISE" />
    </div>
  )
}

export default Pools