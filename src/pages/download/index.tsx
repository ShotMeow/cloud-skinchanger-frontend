import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@/layouts";
import { DownloadSection } from "@/widgets/download";

const DownloadPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cloud Skinchanger - Скачать</title>
      </Head>
      <main>
        <DownloadSection />
      </main>
    </Layout>
  );
};

export default DownloadPage;
