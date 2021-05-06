import Container from "./container";
import React, { FunctionComponent, useState } from "react";
import { NAV_PATH } from "../lib/constants";
import { MenuOutlined } from "@ant-design/icons";
import useSelectWallet from "hooks/useSelectWallet";
import { useRecoilValue } from "recoil";
import AuthStore from "store/AuthStore";
import { Button, Menu } from "antd";

type IMenuList = {
  pathName: string;
};

const MenuList: FunctionComponent<IMenuList> = ({ pathName }: IMenuList) => {
  return (
    <li className="nav-item flex items-center">
      <a
        className="px-3 py-2 flex items-center text-xl uppercase leading-snug text-gray-600 hover:opacity-75"
        href="#pablo"
      >
        {pathName}
      </a>
      
    </li>
  );
};

const NavBar: FunctionComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const selectWallet = useSelectWallet();
  const loginUser = useRecoilValue(AuthStore.loginUser);
  const [page, setPage] = useState("");

  const handleClick = () => {};

  return (
    <nav className="relative flex flex-wrap items-center justify-between py-3 lg:py-10">
      <Container>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-700"
              href="#pablo"
            >
              Edge Index
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
                <MenuList key={name} pathName={name} />
              ))}
              <li className="ml-3 nav-item flex items-center">
                <Button type="primary" shape="round" size="large" className="flex flex-col list-none" >
                  Connect Wallet
                </Button>
              </li>
            </ul>
            {console.log(loginUser )}
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={selectWallet.open}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
