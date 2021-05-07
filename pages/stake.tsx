import Container from "../components/container";
import Layout from "../components/layout";
import Header from 'components/stake/header'
import Pools from 'components/stake/pools'
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";

const Stake = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Pools />
        </Container>
      </Layout>
    </RecoilRoot>
  );
};

export default Stake;
