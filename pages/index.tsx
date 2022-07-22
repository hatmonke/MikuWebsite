import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/Layout";
import Prose from "../components/Prose";
import Minting from "../components/Minting";
import projectConfig from "../config/projectConfig";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <Router>
      <Layout>
        <Head>
          <title>{projectConfig.projectName}</title>
        </Head>
        <Routes>
          <Route path="/" element={
          <div className="mt-[12vh] sm:mt-[9vh] md:mt-[6vh] lg:mt-[3vh] xl:mt-0"><HomePage /></div>} />
          <Route
            path="/mint"
            element={
              <Prose>
                <Minting />
              </Prose>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Home;
