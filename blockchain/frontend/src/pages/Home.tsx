import React, { useState, useCallback } from "react";
import { mintToken, UnlockToken } from "../components/utils/Blockchain";
import { handleClose, handleOpen, handleStatus } from "../components/utils/Nuki";

const Home: React.FC = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false); // Ajout d'un état pour suivre l'état de la porte

  const handleMint = useCallback(async () => {
    await mintToken();
  }, []);

  const handleUnlock = useCallback(async () => {
    var result:boolean = await UnlockToken();
    console.log(result);
    if (result) {
      setIsDoorOpen(!isDoorOpen);
    } else {
      alert("You don't have the right to open this door");
    }
  }, [isDoorOpen]);

  return (
    <div data-theme="light">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AirVandV solution
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We created a solution to secure your home using blockchain
              technology !
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Open / Close door */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative mb-5">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0" />
                  Open or close the lock of the default door.
                </h3>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <button
                  className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${
                    isDoorOpen
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                  onClick={handleUnlock}
                >
                  {isDoorOpen ? "Close" : "Open"}
                </button>
              </div>
            </article>
            {/* Ajouter un nouveau cadenas */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative mb-5">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0" />
                  Add a new lock.
                </h3>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Door ID"
                  />
                  <button className="btn join-item rounded-r-full" onClick={handleMint}>Add</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
