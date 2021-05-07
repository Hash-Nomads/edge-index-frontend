import Container from "../components/container";
import Section from "../components/section";
import Layout from "../components/layout";
import Intro from "../components/intro";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";
import EdgeIndexTable from "../components/edgeIndexTable";
import {
  Coin,
  Wallet,
  LCDClient,
  Key,
  MsgSend,
  MnemonicKey,
} from "@terra-money/terra.js";
import { useRecoilValue } from "recoil";
import AuthStore from "../store/AuthStore";
import useBlockChain from "../hooks/useBlockChain";
import Image from "next/image";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts.slice(0);
  const loginUser = useRecoilValue(AuthStore.loginUser);
  const { getAnc, getLuna, getMir, user } = useBlockChain();
  const luna = getLuna + user.luna
  const anc = getAnc + user.anc
  const mir = getMir + user.mir

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        <div className="flex justify-end my-4">
          <div className="mx-2 flex items-center">
            <Image
              src={`/assets/tokens/LUNA.png`}
              alt="LUNA"
              width="24"
              height="24"
            />
            <span className="ml-2">{luna < 0 ? 0 : luna}</span>
          </div>
          <div className="mx-2 flex items-center">
            <Image
              src={`/assets/tokens/MIR.png`}
              alt="MIR"
              width="24"
              height="24"
            />{" "}
            <span className="ml-2">{mir < 0 ? 0 : mir}</span>
          </div>
          <div className="mx-2 flex items-center">
            <Image
              src={`/assets/tokens/ANC.png`}
              alt="ANC"
              width="24"
              height="24"
            />{" "}
            <span className="ml-2">{anc < 0 ? 0 : anc}</span>
          </div>
        </div>
        <EdgeIndexTable />
        {/* <button onClick={handleClick}>Fuck</button> */}
        {/* {morePosts.length > 0 && <Section posts={morePosts} />} */}
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
