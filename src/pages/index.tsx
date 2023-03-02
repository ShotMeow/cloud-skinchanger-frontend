import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@/shared/ui";
import { LandingSection } from "@/widgets/landing";
import { AdvantagesSection } from "@/widgets/advantages";
import { TariffsSection } from "src/features/tariffsChoice";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cloud Skinchanger</title>
      </Head>
      <LandingSection />
      <AdvantagesSection />
      <TariffsSection />
    </Layout>
  );
};

export default HomePage;
