import React from "react";

const SMARTLOCK_ID = process.env.REACT_APP_SMARTLOCK_ID; //37F8B064
const ENDPOINT = "https://api.nuki.io/smartlock/";
const API_KEY = process.env.REACT_APP_API_KEY;

// const decValue = hexToDec(SMARTLOCK_ID as string);
// console.log(`Calculated ID (DEC): ${decValue}`);

function App() {
  const handleOpen = async () => {
    console.log("Opening the lock...");
    try {
      console.log("start");
      const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/unlock`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${API_KEY}`,
        },
      });
      console.log("before data");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error opening the lock:", error);
    }
    console.log("Done");
  };

  const handleClose = async () => {
    console.log("Closing the lock...");
    try {
      const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/lock`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error opening the lock:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nuki Smart Lock Controller</h1>
        <button onClick={handleOpen}>Open</button>
        <button onClick={handleClose}>Close</button>
      </header>
    </div>
  );
}

export default App;
