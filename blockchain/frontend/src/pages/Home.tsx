import React, { useState, useCallback, useEffect } from "react";
import { mintToken, UnlockToken } from "../components/utils/Blockchain";
import { handleClose, handleOpen, handleStatus } from "../components/utils/Nuki";

const Home: React.FC = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [doorId, setDoorId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const updateDoorStatus = useCallback(async () => {
    const status = await handleStatus();
    setIsDoorOpen(status === 3);
    setIsLoading(status === 2 || status === 4); // Supposant que 2 et 4 sont les états de déverrouillage/verrouillage
  }, []);

  useEffect(() => {
    updateDoorStatus();
  }, [updateDoorStatus]);

  const handleMint = useCallback(async () => {
    if (doorId === "" || doorId === undefined) {
      alert("Please enter a Door ID");
      return;
    }

    const isMinted: boolean = await mintToken(doorId);
    if(!isMinted) {
      alert("Error while minting token");
      return;
    } else {
      alert("Token minted successfully !");
    }
  }, [doorId]);

  const handleUnlock = useCallback(async () => {
    setDisableButton(true);
    const result: boolean = await UnlockToken();
    if (result) {
      setIsLoading(true);
      await (isDoorOpen ? handleClose() : handleOpen());
  
      const intervalId = setInterval(async () => {
        const status = await handleStatus();
        if (status !== 2 && status !== 4) {
          clearInterval(intervalId);
          updateDoorStatus();
        }
      }, 5000);
    } else {
      alert("You don't have the right to open this door");
    }
    setTimeout(() => setDisableButton(false), 5000); // Réactive le bouton après 5 secondes
  }, [isDoorOpen, updateDoorStatus]);

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
    isLoading
      ? "bg-yellow-500 text-white"
      : isDoorOpen
      ? "bg-red-500 text-white"
      : "bg-green-500 text-white"
  }`}
  onClick={handleUnlock}
  disabled={isLoading || disableButton}
>
  {isLoading ? "Loading..." : isDoorOpen ? "Close" : "Open"}
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
                    value={doorId}
                    onChange={(e) => setDoorId(e.target.value)}
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
