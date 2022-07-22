/* eslint-disable react/no-string-refs */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import {
  BrowserRouter as Router,
  Route,
  Link as RLink,
  Routes,
} from "react-router-dom";
import Link from "next/link";

import ConnectButton from "./ConnectButton";
import Container from "./Container";
import NextLink from "./NextLink";
import projectConfig from "../config/projectConfig";
import { injected } from "../utils/wallet/connectors";

import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Menu, message, Space } from "antd";
import React from "react";

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};



const logo = "https://i.imgur.com/kmn0Cwy.png";

export default function Header() {
  const { activate, setError, account, active } = useWeb3React();
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://mikubsc.com/swap/">
              Miku Swap
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://mikubsc.com/swap/">
              Miku Locker
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://mikubsc.com/swap/">
              Coming Soon!
            </a>
          ),
          disabled: true,
        },
      ]}
    />
  );
  useEffect(() => {
    async function loadInjectedWallet() {
      const isAuthorized = await injected.isAuthorized();
      if (isAuthorized) {
        await activate(injected);
      }
    }
    try {
      loadInjectedWallet();
    } catch (error) {
      if (error instanceof Error) setError(error);
    }
  }, [activate, setError]);

  return (
    <div className="sticky top-0 z-50">
      <header className="py-8 font-['Rupster']">
        <Container>
          <div className="flex justify-between items-center font-bold">
            <Link href="#" passHref>
              <span className="flex items-center">
                <picture>
                  <source srcSet={logo} />
                  <img src={logo} alt="logo" className="w-44" />
                </picture>
              </span>
            </Link>

            <div className="items-center hidden md:flex mx-auto">
              <a
                href=" https://pancakeswap.finance/swap?outputCurrency=0x73419De8E3E26A17e0E6b0436e29dd04A25B061D"
                aria-label={`Buy ${projectConfig.projectName} on Pancake`}
                rel="noopener noreferrer"
                target="_blank"
                data-tip="Buy"
                data-for="header"
                className=" p-2"
              >
                BUY
              </a>
              <a
                href="https://poocoin.app/tokens/0x73419de8e3e26a17e0e6b0436e29dd04a25b061d"
                aria-label={`View the chart for ${projectConfig.projectName}`}
                rel="noopener noreferrer"
                target="_blank"
                data-tip="Chart"
                data-for="header"
                className=" p-2"
              >
                CHART
              </a>
              <div className="p-2">
                <Link
                  href="#Tokenomics"
                  scroll={true}
                  aria-label={`Tokenomics`}
                  data-tip="Tokenomics"
                  data-for="header"
                >
                  TOKENOMICS
                </Link>
              </div>

              <Link
                href="#Roadmap"
                aria-label={`Roadmap`}
                data-tip="Roadmap"
                data-for="header"
              >
                ROADMAP
              </Link>
              <a
                href="https://novos.tech/MIKU_Token_Audit.html"
                aria-label={`Audit for ${projectConfig.projectName}`}
                rel="noopener noreferrer"
                target="_blank"
                data-tip="Audit"
                data-for="header"
                className=" p-2"
              >
                AUDIT
              </a>
            </div>
            <Dropdown overlay={menu} placement="topLeft">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  DAPPS
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <div>
              {active && account ? (
                <span className="flex font-mono w-44 items-center space-x-2 p-2 bg-gray-700 rounded-full">
                  <Jazzicon
                    diameter={32}
                    seed={jsNumberForAddress(account.toLowerCase())}
                  />
                  <span>
                    {`${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`}
                  </span>
                </span>
              ) : (
                <ConnectButton />
              )}
            </div>
           
          </div>
        </Container>
      </header>
    </div>
  );
}
