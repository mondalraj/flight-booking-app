import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  useEffect(() => {
    function loggedIn() {
      if (window.localStorage.getItem("loggedIn") !== "false") {
        setIsLoggedIn("true");
      }
    }

    loggedIn();
  }, []);

  return (
    <nav className="bg-slate-100 p-5 px-10 fixed top-0 left-0 right-0 z-50 shadow-xl">
      <div className="flex justify-between items-center text-text">
        <Link href="/" passHref>
          <h3 className="text-2xl font-semibold cursor-pointer">SIMPLY JET</h3>
        </Link>

        <div className="flex items-center font-medium space-x-10 text-lg">
          <Link href="/" passHref>
            <div className="cursor-pointer">Team</div>
          </Link>
          <Link href="/" passHref>
            <div className="cursor-pointer">Aircraft</div>
          </Link>
          <Link href="/" passHref>
            <div className="cursor-pointer">Explore</div>
          </Link>
        </div>

        <div>
          {isLoggedIn === "false" ? (
            <Link href="/login" passHref>
              <div className="cursor-pointer font-medium text-black">LOGIN</div>
            </Link>
          ) : (
            <div className="cursor-pointer font-medium text-black" onClick={()=>{
                window.localStorage.setItem("loggedIn", "false")
                setIsLoggedIn("false")
            }}>Logout {window.localStorage.getItem("loggedIn")}</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
