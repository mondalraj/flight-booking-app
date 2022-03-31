import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/home/Header";
import Navbar from "../components/common/Navbar";

const Home: NextPage = () => {
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    

    async function fetchIPinfo() {
      await fetch("https://ipinfo.io/110.235.239.23/?token=5e056099665816")
        .then((res) => res.json())
        .then((data) => setUserLocation(data));
    }
    fetchIPinfo();

  }, []);

  return (
    <>
      <Head>
        <title>Simply Jet</title>
        <meta
          name="description"
          content="Charter your private jet effortlessly, anywhere, at any time."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header location={userLocation} />
    </>
  );
};

export default Home;
