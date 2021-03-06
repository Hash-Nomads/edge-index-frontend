import { useState } from 'react'
import ExpandedRow from "./expanded-row";
import { Table } from "antd";

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
];

const data = [
  {
    key: 1,
    token: "TECO",
    etf: "Terra Ecosystem ETF",
    assets: ["LUNA", "ANC", "MIR"],
    apy: "203%",
    liquidity: "987665",
  },
  {
    key: 2,
    token: "AWP",
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
  },
  {
    key: 3,
    token: "SAVE",
    etf: "Savings Pool ETF",
    assets: ["aUST", "mIAU", "mSLV"],
    apy: "435%",
    liquidity: "768947",
  },
  {
    key: 4,
    token: "IND",
    etf: "Index&ETF Pool ETF",
    assets: ["mQQQ", "mSPY", "aUST"],
    apy: "267%",
    liquidity: "658893",
  },
  {
    key: 5,
    token: "RISE",
    etf: "New Rise Pool ETF ",
    assets: ["mCOIN", "mTSLA", "mABNB"],
    apy: "328%",
    liquidity: "985473",
  },
];

const Pools = () => {
  const [expKeys, setExpKeys] = useState(data && data.map(i => i.key));
  const openOrCloseAll = (type: boolean) => {
    type ? setExpKeys([]) : setExpKeys(data && data.map(i => i.key));
  };

  return (
    <div className="mb-24">
      <Table
        columns={columns}
        dataSource={data}
        onRow={r => {
          return {
            onClick: (event) => {
              const newExp: any = expKeys.filter(i => i !== r.key);
              setExpKeys(newExp);
            }
          }
        }}
        pagination={false}
        onExpand={(b, r) => {
          const newExp: any = b ? [...expKeys, r.key] : expKeys.filter(i => i !== r.key);
          setExpKeys(newExp);
        }}
        expandedRowRender={record => <ExpandedRow collecteral={record.token} />}
        rowKey={record => record.key}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default Pools;
