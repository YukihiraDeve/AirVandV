import React from "react";

var SMARTLOCK_ID = "18118914148"
const ENDPOINT = "https://api.nuki.io/smartlock/";
const API_KEY = "f6466c0646699cce05e0c920cf1824d7d6271c2c9edef97ea328aa1cb4d0c6b3f0c40644fc8ff876" //process.env.REACT_APP_API_KEY;


function hexToDec(SMARTLOCK_ID: string): number {
  return parseInt(SMARTLOCK_ID, 16);
}


const decValue = hexToDec(SMARTLOCK_ID);
console.log(`Calculated ID (DEC): ${decValue}`);


//https://api.nuki.io/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=CALLBACK_URL&scope=SCOPES


function App() {
  const handleOpen = async () => {
    console.log("Opening the lock...");
    try {
      console.log("start")
      const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/unlock`, {
        method: "POST",
        headers: {
          'authorization': `Bearer ${API_KEY}`
        },
      });
      console.log("before data") 

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
    } catch (error) {
      console.error("Error opening the lock:", error);
    }
     console.log("Finaly");
  };

  const handleTest = async () => {
    console.log("Testing the lock...");
    try {
      const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/unlock`, {
        method: "POST",
        headers: {
          authorization: `${API_KEY}`,
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error testing the lock:", error);
    }
  };


  const handleClose = async () => {
    console.log("Closing the lock...");
    try {
      const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/lock`, {
        method: "POST",
        headers: {
          authorization: `${API_KEY}`,
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error closing the lock:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nuki Smart Lock Controller</h1>
        <button onClick={handleOpen}>Open</button>
        <button onClick={handleClose}>Close</button>
        <button onClick={handleTest}>Test</button>
      </header>
    </div>
  );
}

export default App;
