import { FunctionComponent } from 'react';
import Image from 'next/image'

type IProps = {
  stakedTokenSymbolDisplay: string
  stakedTokenSymbols: Array<string>
  earnedToken: string
}

const PoolCard: FunctionComponent<IProps> = ({stakedTokenSymbolDisplay, stakedTokenSymbols, earnedToken}: IProps) => {

  return (
    <>
      <div className="p-4 lg:w-1/3 w-full">
        <div className="bg-gradient-to-l from-blue-900 to-purple-800 bg-opacity-75 px-8 py-5 rounded-t-2xl overflow-hidden relative flex-col">
          <div className="flex flex-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="text-2xl font-semibold title-font text-white">
                Earn {earnedToken}
              </span>
              <span className="mt-1 text-white text-sm">Stake {stakedTokenSymbolDisplay}</span>
            </div>
            <div className="flex-grow flex justify-end items-center text-white relative">
              {stakedTokenSymbols.map((symbol, i) =>
                <div key={symbol} style={{right: `${i*2}rem`}} className="absolute">
                  <Image src={`/assets/tokens/${symbol}.png`} alt="" width="52" height="52" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 bg-opacity-75 px-8 pt-12 pb-12 rounded-b-2xl overflow-hidden text-center relative">
          <h2 className="tracking-widest text-md title-font font-medium text-gray-400 mb-1">
            APR
          </h2>
          <h1 className="title-font sm:text-3xl text-2xl font-medium text-gray-900 mb-3">
            20.72%
          </h1>
          <div className="flex justify-center items-center flex-wrap">
            <Image src={`/assets/tokens/${earnedToken}.png`} alt="" width="52" height="52" />
            <span className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1 ml-3">
              {earnedToken} Earned
            </span>
          </div>
          <h1 className="title-font sm:text-3xl text-2xl font-medium text-gray-900 mb-3">
            11.12
          </h1>
          <button className="text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg h-10">Harvest</button>
          <button className="text-white bg-blue-500 mt-5 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg w-full h-16">Approve</button>
        </div>
      </div>
    </>
  );
};

export default PoolCard;
