import Container from "../components/container";
import Layout from "../components/layout";
import Intro from '../components/intro'
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import "antd/dist/antd.css";
import { RecoilRoot } from 'recoil'

const Exchange = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </RecoilRoot>
  );
};

export default Exchange;