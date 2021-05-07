import EdgeIndexTable from "../components/edgeIndexTable";
import Container from "../components/container";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import "antd/dist/antd.css";
import {Coin, Wallet, LCDClient} from '@terra-money/terra.js'

const ETF = () => {
  const terra = new LCDClient({
    URL: 'https://tequila-lcd.terra.dev:80',
    chainID: 'tequila-0004',
  });

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        <EdgeIndexTable />
      </Container>
    </Layout>
  );
};

export default ETF;
