import EdgeIndexTable from "../components/edgeIndexTable";
import Container from "../components/container";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import "antd/dist/antd.css";
import { Coin, Wallet, LCDClient, Key, MsgSend } from "@terra-money/terra.js";
import AuthStore from "../store/AuthStore";
import { useRecoilValue } from "recoil";

const ETF = () => {
  const terra = new LCDClient({
    URL: "http://3.35.148.111:26657",
    chainID: "tequila-0004",
  });
  const loginUser = useRecoilValue(AuthStore.loginUser);
  const wallet = terra.wallet(loginUser);

  const send = new MsgSend(
    "terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v",
    "terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp",
    { uluna: 1000000 }
  );

  const handleClick = () => {
    try {
      wallet
      .createAndSignTx({
        msgs: [send],
        memo: 'hello'
      })
      .then((tx) => terra.tx.broadcast(tx))
      .then((result) => {
        console.log(`TX hash: ${result.txhash}`);
      });
    } catch (error) {
      console.log({error});
      
    }
  };

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        <EdgeIndexTable />
        <button onClick={handleClick}>Fuck</button>
      </Container>
    </Layout>
  );
};

export default ETF;
