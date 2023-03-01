import React from "react";
import { Layout } from "@/layouts";
import { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cloud Skinchanger</title>
      </Head>
    </Layout>
  );
};

export default HomePage;
