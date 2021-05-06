import Container from "./container";
import React, { FunctionComponent, useState } from "react";
import { NAV_PATH } from "../lib/constants";
import { MenuOutlined } from "@ant-design/icons";
import useSelectWallet from "hooks/useSelectWallet";
import { useRecoilValue } from "recoil";
import AuthStore from "store/AuthStore";
import { Button } from "antd";
import { useRouter } from "next/router";

type IMenuList = {
  pathName: string;
  currPath: string;
  handleClickLink: () => void;
};

const MenuList: FunctionComponent<IMenuList> = ({
  pathName,
  currPath,
  handleClickLink,
}: IMenuList) => {
  return (
    <li className="nav-item flex items-center">
      <a
        className={
          (`/${pathName.toLowerCase()}` === currPath
            ? "px-3 py-2 flex items-center text-xl uppercase leading-snug hover:opacity-75 text-blue-500"
            : "px-3 py-2 flex items-center text-xl uppercase leading-snug hover:opacity-75 text-gray-600")
        }
        onClick={handleClickLink}
      >
        {pathName}
      </a>
    </li>
  );
};

const NavBar: FunctionComponent = () => {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const selectWallet = useSelectWallet();
  const loginUser = useRecoilValue(AuthStore.loginUser);

  const handleClickLink = (pathName: string) => {
    router.push(`/${pathName.toLowerCase()}`);
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between py-3 lg:py-10">
      <Container>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-700"
              href="home"
            >
              Edge Protocol
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuOutlined style={{ color: "#1d1d1d" }} />
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {NAV_PATH.map((name, index) => (
                <MenuList
                  key={name}
                  pathName={name}
                  currPath={router.pathname}
                  handleClickLink={() => handleClickLink(name)}
                />
              ))}
              <li className="ml-3 nav-item flex items-center">
                {console.log(loginUser)}
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  onClick={selectWallet.open}
                >
                  Connect Wallet
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
