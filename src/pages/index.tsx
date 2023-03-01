import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@/shared/ui";
import { Landing } from "@/widgets/landing";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cloud Skinchanger</title>
      </Head>
      <Landing />
    </Layout>
  );
};

export default HomePage;
