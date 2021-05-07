import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Progress } from "antd";

import { Table, Tag, Space } from "antd";
import { Button, Dropdown } from "antd";
import { useRouter } from "next/router";

const columns = [
  {
    title: "Token",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Allocation",
    dataIndex: "allocation",
    key: "allocation",
    render: (perc: number) => <Progress percent={perc} />,
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
    price: "16.95",
    APY: "NONE",
  },
  {
    name: "ANC",
    allocation: 25,
    price: "5.60",
    APY: "NONE",
  },
  {
    name: "MIR",
    allocation: 50,
    price: "10.36",
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
