import { useState } from 'react'
import PoolCard from "./pool-card";
import { Collapse, Table } from "antd";

const columns = [
  {
    title: "ETFs",
    dataIndex: "etf",
    key: "etf",
  },
  {
    title: "Assets",
    dataIndex: "assets",
    key: "assets",
    render: (assets: string[]) => (
      <div className="flex flex-wrap">
        {assets.map((asset) => (
          <p className="mr-2">{asset}</p>
        ))}
      </div>
    ),
  },
  {
    title: "Borrow APY",
    dataIndex: "apy",
    key: "apy",
    render: (apy: string) => <p className="text-green-400">{apy}</p>,
  },
  {
    title: "Available Liquidity",
    key: "liquidity",
    dataIndex: "liquidity",
  },
  {
    title: "Buy",
    key: "buy",
    dataIndex: "buy",
    render: (text: string) => (
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-center px-6 py-2 rounded-lg shadow-lg font-bold text-white cursor-pointer">
        {text}
      </div>
    ),
  },
];

const data = [
  {
    id: 1,
    etf: "Terra Ecosystem ETF",
    assets: ["LUNA", "ANC", "MIR"],
    apy: "203%",
    liquidity: "987665",
    buy: "BUY",
  },
  {
    id: 2,
    etf: "All weather pool ETF",
    assets: [
      "mIAU",
      "mSLV",
      "aUST",
      "LUNA",
      "ANC",
      "MIR",
      "mBTC",
      "mETH",
      "mGOOGL",
      "mAMZN",
      "mTSLA",
      "mSPY",
    ],
    apy: "753%",
    liquidity: "487665",
    buy: "BUY",
  },
  {
    id: 3,
    etf: "Savings Pool ETF",
    assets: ["aUST", "mIAU", "mSLV"],
    apy: "435%",
    liquidity: "768947",
    buy: "BUY",
  },
  {
    id: 4,
    etf: "Index&ETF Pool ETF",
    assets: ["mQQQ", "mSPY", "aUST"],
    apy: "267%",
    liquidity: "658893",
    buy: "BUY",
  },
  {
    id: 5,
    etf: "New Rise Pool ETF ",
    assets: ["mCOIN", "mTSLA", "mABNB"],
    apy: "328%",
    liquidity: "985473",
    buy: "BUY",
  },
];

const ExpandedRow = () => {
  return (
    <PoolCard stakedTokenSymbolDisplay="TECO" stakedTokenSymbols={['LUNA', 'MIR', 'ANC']} earnedToken="TECO" />
  );
}

const Pools = () => {

  const [expKeys, setExpKeys] = useState(data && data.map(i => i.id));
  const openOrCloseAll = (type: boolean) => {
    type ? setExpKeys([]) : setExpKeys(data && data.map(i => i.id));
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      onExpand={(b, r) => {
        const newExp: any = b ? [...expKeys, r.id] : expKeys.filter(i => i !== r.id);
        setExpKeys(newExp);
      }}
      expandedRowRender={record => ExpandedRow()}
      rowKey={record => record.id}
      scroll={{ x: true }}
    />
  );
};

export default Pools;
