import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { LandingSection } from "@/widgets/landing";
import { AdvantagesSection } from "@/widgets/advantages";
import { TariffsSection } from "src/features/tariffsChoice";
import { TariffCalculatorSection } from "@/features/tariffCalculator";
import { Layout } from "@/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cloud Skinchanger</title>
      </Head>
      <LandingSection />
      <AdvantagesSection />
      <TariffsSection />
      <TariffCalculatorSection />
    </Layout>
  );
};

export default HomePage;
