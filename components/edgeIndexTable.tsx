import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Table, Tag, Space } from "antd";
import { Button, Dropdown } from "antd";
import { useRouter } from "next/router";

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
    title: "24H Change",
    dataIndex: "change",
    key: "change",
    render: (change: string) => <p className="text-green-400">{change}</p>,
  },
  {
    title: "ETF Price",
    key: "price",
    dataIndex: "price",
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
    etf: "Terra Ecosystem ETF",
    assets: ["LUNA", "ANC", "MIR"],
    change: "+ 1.20",
    price: "7.32",
    buy: "BUY",
  },
  {
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
    change: "+ 0.50",
    price: "6.98",
    buy: "BUY",
  },
  {
    etf: "Savings Pool ETF",
    assets: ["aUST", "mIAU", "mSLV"],
    change: "+ 0.08",
    price: "1.18",
    buy: "BUY",
  },
  {
    etf: "Index&ETF Pool ETF",
    assets: ["mQQQ", "mSPY", "aUST"],
    change: "+ 1.48",
    price: "11.24",
    buy: "BUY",
  },
  {
    etf: "New Rise Pool ETF ",
    assets: ["mCOIN", "mTSLA", "mABNB"],
    change: "+ 9.85",
    price: "30.20",
    buy: "BUY",
  },
];

const IndexTable = () => {
  const router = useRouter();

  return (
    <Table
      columns={columns}
      dataSource={data}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => router.push(`/terra-eco`), // click row
        };
      }}
      pagination={false}
      rowKey={(record, index) => index}
    />
  );
};
export default IndexTable;
