import Container from "../components/container";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";

const Stake = () => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
      </Container>
    </Layout>
  );
};

export default Stake;
