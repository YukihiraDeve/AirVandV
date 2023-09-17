import React from "react";

function Footer() {
  return (
    <>
      <hr className="text-white mx-5" />
      <footer className="bg-[#181818] pb-20">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <a className="text-3xl font-bold ml-3 mt-1">
                <span className="text-base-100 text-white">AirVandV</span>
              </a>
            </div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
