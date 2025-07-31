import Head from "next/head";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import HeroBanner from "../components/HeroBanner";
import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flipkart Redesign</title>
      </Head>

      <main className="bg-gray-100 min-h-screen">
        <Header />
        <CategoryNav />
        <HeroBanner />
        <ProductSection />
      </main>
    </>
  );
}
