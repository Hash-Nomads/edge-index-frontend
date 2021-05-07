import Document, { Html, Head, Main, NextScript } from "next/document";
import { RecoilRoot } from "recoil";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <RecoilRoot>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </RecoilRoot>
      </Html>
    );
  }
}
