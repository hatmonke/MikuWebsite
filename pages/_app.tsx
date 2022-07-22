
import '../styles/globals.css';
import 'antd/dist/antd.css';
import "swiper/css";
import "swiper/css/pagination";
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

function getLibrary(provider: any) {
  return new ethers.providers.Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      <Web3ReactProvider getLibrary={getLibrary}>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </Web3ReactProvider>
    </div>
  );
}

export default MyApp;
