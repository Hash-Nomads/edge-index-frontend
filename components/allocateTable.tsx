import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Progress } from "antd";

import { Table, Tag, Space } from "antd";
import { Button, Dropdown } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";

const columns = [
  {
    title: "Token",
    dataIndex: "name",
    key: "name",
    render: (name: string) => (
      <Image
        src={`/assets/tokens/${name.toUpperCase()}.png`}
        alt="ANC"
        width="24"
        height="24"
        />
    ),
  },
  {
    title: "Allocation",
    dataIndex: "allocation",
    key: "allocation",
    render: (perc: number) => <div style={{width:"300px"}}>
      <Progress percent={perc}  width={100}
      strokeColor={{
        '0%': '#87d068',
        '100%': '#108ee9',
      }}/>
    </div>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price: string) => <p>$ {price}</p>,
  },
  {
    title: "APY",
    dataIndex: "APY",
    key: "APY",
  },
];

const data = [
  {
    name: "Luna",
    allocation: 50,
    price: "16.84",
    APY: "NONE",
  },
  {
    name: "ANC",
    allocation: 25,
    price: "0.06",
    APY: "NONE",
  },
  {
    name: "MIR",
    allocation: 50,
    price: "1.31",
    APY: "NONE",
  },
];

const AllocateTable = () => {
  const router = useRouter();

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey={(record, index) => index}
    />
  );
};
export default AllocateTable;
