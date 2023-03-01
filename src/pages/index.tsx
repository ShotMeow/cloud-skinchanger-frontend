import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@/shared/ui";
import { LandingSection } from "@/widgets/landing";
import { AdvantagesSection } from "@/widgets/advantages/ui/AdvantagesSection/AdvantagesSection";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cloud Skinchanger</title>
      </Head>
      <LandingSection />
      <AdvantagesSection />
    </Layout>
  );
};

export default HomePage;
