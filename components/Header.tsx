/* eslint-disable react/no-string-refs */
/* eslint-disable @next/next/no-img-element */
import { useWeb3React } from "@web3-react/core";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useRouter } from 'next/router'
import {
  BrowserRouter as Router,
  Route,
  Link as RLink,
  Routes,
} from "react-router-dom";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ConnectButton from "./ConnectButton";
import projectConfig from "../config/projectConfig";
import { injected } from "../utils/wallet/connectors";

import type { MenuProps } from "antd";
import { Dropdown, Menu, message, Space, Drawer } from "antd";
const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const logo = "https://i.imgur.com/kmn0Cwy.png";

export default function Header() {
  const router = useRouter()
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const { activate, setError, account, active } = useWeb3React();

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
    <div className="w-screen top-0 z-50 sticky p-2">
      <Drawer
        title=""
        placement="left"
        width={200}
        onClose={onClose}
        visible={visible}
        className="font-['Rupster'] text-black bg-opacity-50"
      >
        <p>
          {" "}
          <a
            href="https://mikubsc.com"
          >
            <p className="text-4xl">MIKU</p>
          </a>
        </p>
        <p>
          {" "}
          <a
            href=" https://pancakeswap.finance/swap?outputCurrency=0x73419De8E3E26A17e0E6b0436e29dd04A25B061D"
            aria-label={`Buy ${projectConfig.projectName} on Pancake`}
            rel="noopener noreferrer"
            target="_blank"
            data-tip="Buy"
            data-for="header"
          >
            <p className="text-black">BUY</p>
          </a>
        </p>
        <p>
          {" "}
          <a
            href="https://poocoin.app/tokens/0x73419de8e3e26a17e0e6b0436e29dd04a25b061d"
            aria-label={`View the chart for ${projectConfig.projectName}`}
            rel="noopener noreferrer"
            target="_blank"
            data-tip="Chart"
            data-for="header"
          >
            <p className="text-black">CHART</p>
          </a>
        </p>
        <p>
          {" "}
          <Link
            href="/#Tokenomics"
            scroll={true}
            aria-label={`Tokenomics`}
            data-tip="Tokenomics"
            data-for="header"
            passHref
          >
            <p className="hidden lg:flex">TOKENOMICS</p>
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href="/#Roadmap"
            aria-label={`Roadmap`}
            data-tip="Roadmap"
            data-for="header"
            passHref
          >
            <p className="hidden lg:flex">ROADMAP</p>
          </Link>
        </p>
        <p>
          {" "}
          <a
            href="https://novos.tech/MIKU_Token_Audit.html"
            aria-label={`Audit for ${projectConfig.projectName}`}
            rel="noopener noreferrer"
            target="_blank"
            data-tip="Audit"
            data-for="header"
          >
            <p className="text-black">AUDIT</p>
          </a>
        </p>
        <p>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mikubsc.com/swap/"
            className="text-black"
          >
            Miku Swap
          </a>
        </p>
        <p>
        <Link
            href="/locker"
            aria-label={`Mikulock`}
            data-tip="Mikulock"
            data-for="header"
            passHref
          >
            <p style={{cursor:"pointer"}}>Miku Lock</p>
          </Link>
        </p>
      </Drawer>
      <header className="flex justify-between font-['Rupster']">
        <button
          onClick={showDrawer}
          className="border border-black rounded-full p-2 bg-white bg-opacity-20 text-xl justify-self-end"
        >
          Open
        </button>
        <div>
          {active && account ? (
            <span className="font-bold flex font-mono w-44 items-center space-x-2 p-2 bg-gray-200 rounded-full">
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
      </header>
    </div>
  );
}
