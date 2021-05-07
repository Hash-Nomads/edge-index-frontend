import EdgeIndexTable from "../components/edgeIndexTable";
import Container from "../components/container";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import "antd/dist/antd.css";
import Image from "next/image";
import { ReactNode } from "../../../../../../Library/Caches/typescript/4.3/node_modules/@types/react";
import { Button } from "antd/lib/radio";
import AllocateTable from "./../components/allocateTable";
const FlexCenter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

const InfoColum = ({ top, down }: { top: string; down: string }) => {
  return (
    <div className="mx-4 text-base">
      <FlexCenter className="font-bold">{top}</FlexCenter>
      <FlexCenter>{down}</FlexCenter>
    </div>
  );
};

const TerraEco = () => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <div className="pl-8">
          <FlexCenter className="justify-between">
            <div>
              <div className="w-20 h-20">
                <Image
                  src="/assets/tokens/ETF.png"
                  alt="ETF"
                  width="64"
                  height="64"
                />
              </div>
              <div>
                <h1 className="text-2xl">Terra Ecosystem ETF</h1>
                <FlexCenter>
                  <h1 className="text-4xl">$ 7.32</h1>
                  <p className="text-green-400 px-4">▲ 1.20 %</p>
                </FlexCenter>
              </div>
            </div>

            <FlexCenter>
              <div
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-6 py-2  rounded-lg shadow-lg  text-white cursor-pointer mr-2"
                style={{ width: "207px" }}
              >
                <p className="font-bold p-0 m-0">Buy & Sell</p>
                <p className="p-0 m-0">Instant swap</p>
              </div>
              <div
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-6 py-2  rounded-lg shadow-lg text-white cursor-pointer "
                style={{ width: "207px" }}
              >
                <p className="font-bold p-0 m-0">Bake your Pie</p>
                <p className="p-0 m-0">Wait and save 97% gas</p>
              </div>
            </FlexCenter>
          </FlexCenter>
          <FlexCenter>
            <InfoColum top={"$ 7.41"} down={"NAV"} />
            <InfoColum top={"2.38 %"} down={"Discount"} />
            <InfoColum top={"0.79 %"} down={"Tot APY"} />
            <InfoColum top={"$ 2,494,595"} down={"Market Cap"} />
          </FlexCenter>
          <br />
          <br />
          <br />
          <AllocateTable />
        </div>
      </Container>
    </Layout>
  );
};

export default TerraEco;
