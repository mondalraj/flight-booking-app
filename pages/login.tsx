import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import LoginForm from "../components/login/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
};

export default Login;
