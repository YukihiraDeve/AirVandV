import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

import "./Header.css";
import { Link } from "react-router-dom";

let injectedProvider = false;

const Header = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log(provider);
      setHasProvider(Boolean(provider)); // transform provider to true or false
    };

    getProvider();
  }, []);

  const updateWallet = async (accounts: any) => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    updateWallet(accounts);
  };

  return (
    <div className={`sticky top-0 z-20 w-full bg-[#282828]`}>
      <div className="navbar container mx-auto px-9">
        <div className="mb-2 navbar-start">
          <a
            className="text-3xl font-bold ml-3 mt-1 hover:cursor-pointer"
            href="/"
          >
            <span className=" mt-2 bg-clip-text font-extrabold  text-transparent bg-gradient-to-r from-neutral via-neutral to-base-100 md:inline-block">
              {" "}
              AirVandV{" "}
            </span>
          </a>
        </div>
        <div className="mb-2 navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 space-x-4 mt-1">
            <Link to="/">
              <li>
                <p className="btn-ghost mt-2 text-neutral"> Home </p>
              </li>
            </Link>

            <Link to="/wallet">
              <li>
                <p className="btn-ghost mt-2 text-neutral"> Wallet </p>
              </li>
            </Link>

            <Link to="/create">
              <li>
                <p className="btn-ghost mt-2 text-neutral"> Create </p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="mb-2 navbar-end mr-3 gap-x-3">
          <button className="button" onClick={handleConnect}>
            {wallet.accounts.length === 0 ? (
              <span className="button-text">Connect Wallet</span>
            ) : (
              <span className="button-text">{wallet.accounts[0]}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
