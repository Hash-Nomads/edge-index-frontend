import EdgeIndexTable from "../components/edgeIndexTable";
import Container from "../components/container";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import "antd/dist/antd.css";
import {
  Coin,
  Wallet,
  LCDClient,
  Key,
  MsgSend,
  MnemonicKey,
} from "@terra-money/terra.js";
import AuthStore from "../store/AuthStore";
import { useRecoilValue } from "recoil";

const ETF = () => {
  const loginUser = useRecoilValue(AuthStore.loginUser);
  const mk = new MnemonicKey({
    mnemonic:
      "used buddy base gym minimum popular harsh tunnel visa flat property rocket found follow salon during isolate leader fade rely grain talk wreck cream",
  });

  // connect to soju testnet
  const terra = new LCDClient({
    // URL: "http://tequila-lcd.terra.dev:80",
    URL: "http://3.35.148.111:26657",
    chainID: "tequila-0004",
  });

  const wallet = terra.wallet(mk);

  // create a simple message that moves coin balances
  const send = new MsgSend(
    "terra1pdf6wsfmfaeglm0pumv97qkpx34uaf5u3j6ztt",
    "terra1etl5z8nn4m32t3wsqz8er7pc76qnh00app03v2",
    { uluna: 100 }
  );

  const handleClick = () => {
    try {
      wallet
        .createAndSignTx({
          msgs: [send],
          memo: "test from terra.js!",
        })
        .then((tx) => terra.tx.broadcast(tx))
        .then((result) => {
          console.log(`TX hash: ${result.txhash}`);
        });
    } catch (error) {
      console.log({ error });
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
        {/* <button onClick={handleClick}>Fuck</button> */}
      </Container>
    </Layout>
  );
};

export default ETF;
