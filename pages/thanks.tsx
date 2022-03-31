import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";

const Thanks: NextPage = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[url('https://elitetraveler.com/wp-content/uploads/2020/11/private-jet-in-clouds-scaled-e1606414154885.jpg')] bg-no-repeat bg-cover bg-center relative pt-16">
          <div className="bg-gradient-to-b from-black opacity-50 absolute top-0 right-0 left-0 bottom-0 z-10"></div>
          <div className="z-40 bg-black/50 py-20 w-full flex flex-col justify-center items-center gap-4">
            <h2 className="text-white font-bold text-6xl tracking-wide">
              Thank You!
            </h2>
            <h3 className="text-white font-semibold text-center tracking-wider text-xl w-1/2">
              One of our Charter Team will send you a quotation shortly. If your
              flight request is urgent please call us on (UK) +44 (0) 208 068
              2252.
            </h3>
          </div>
        </div>
      </header>
    </>
  );
};

export default Thanks;
