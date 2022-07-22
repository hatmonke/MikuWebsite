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
          <Route
            path="/mint"
            element={
              <Prose>
                <Minting />
              </Prose>
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Home;
