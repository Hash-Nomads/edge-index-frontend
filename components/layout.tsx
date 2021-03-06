import Footer from "./footer";
import Meta from "./meta";
import NavBar from "./nav-bar";
import { RecoilRoot } from "recoil";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <NavBar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
