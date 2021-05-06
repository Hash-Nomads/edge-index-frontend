import Container from "../components/container";
import Section from "../components/section";
import Layout from "../components/layout";
import Intro from '../components/intro'
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import "antd/dist/antd.css";
import { RecoilRoot } from 'recoil'


type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts.slice(0);
  return (
    <RecoilRoot>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <Section posts={morePosts} />}
        </Container>
      </Layout>
    </RecoilRoot>
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