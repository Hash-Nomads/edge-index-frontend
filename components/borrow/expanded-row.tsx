import { FunctionComponent } from "react";
import { ETF } from 'lib/constants';
import Image from "next/image";
import {  Input, Select  } from 'antd';
const { Option } = Select;

const selectBefore = (collecteral: string) => {
  return (
  <Select defaultValue={ETF[collecteral][0]} className="select-before">
    {ETF[collecteral].map((symbol, i) => 
      <Option key={symbol} value={symbol}>{symbol}</Option>
    )}
  </Select>)
}

type IProps = {
  collecteral: string;
};

const ExpandedRow: FunctionComponent<IProps> = ({
  collecteral,
}: IProps) => {
  return (
    <>
      <div className="bg-gradient-to-l from-blue-900 to-purple-800 bg-opacity-75 px-8 py-5 overflow-hidden relative flex-col">
        <div className="flex flex-wrap">
          <Image
            src={`/assets/tokens/${collecteral}.png`}
            alt=""
            width="52"
            height="52"
          />
          <div className="md:w-64 md:mb-0 mb-6 ml-4 flex-shrink-0 flex flex-col">
            <span className="text-2xl font-semibold title-font text-white">
              Add {collecteral}
            </span>
            <span className="mt-1 text-white text-sm">
              to receive one of {collecteral}'s asset
            </span>
          </div>
          <div className="flex-grow flex justify-end items-center text-white relative">
            {ETF[collecteral].map((symbol, i) => (
              <div
                key={symbol}
                style={{ right: `${i * 2}rem` }}
                className="absolute"
              >
                <Image
                  src={`/assets/tokens/${symbol}.png`}
                  alt=""
                  width="52"
                  height="52"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 bg-opacity-75 px-8 pt-12 pb-12 overflow-hidden text-center relative">
        <h2 className="tracking-widest text-md title-font font-medium text-gray-400 mb-1">
          Add Collecteral
        </h2>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore={selectBefore(collecteral)} defaultValue="0" />
        </div>
        <div className="flex justify-center items-center flex-wrap mt-10">
          <Image
            src={`/assets/tokens/${collecteral}.png`}
            alt=""
            width="52"
            height="52"
          />
          <span className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1 ml-3">
            {collecteral} Received
          </span>
        </div>
        <h1 className="title-font sm:text-3xl text-2xl font-medium text-blue-900 mb-3 mt-5">
          0.0 {collecteral}
        </h1>
        <button className="text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg h-10">
          Borrow
        </button>
      </div>
    </>
  );
};

export default ExpandedRow;
