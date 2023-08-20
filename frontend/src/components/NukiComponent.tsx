import React from "react";

const SMARTLOCK_ID = process.env.REACT_APP_SMARTLOCK_ID;
const ENDPOINT = "https://api.nuki.io/smartlock/";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const handleOpen = async () => {
    console.log("Opening the lock...");
    try {
      const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/unlock`, {
        method: "POST",
        headers: {
          Authorization: `${API_KEY}`,
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error opening the lock:", error);
    }
  };

  const handleClose = async () => {
    console.log("Closing the lock...");
    try {
      const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/lock`, {
        method: "POST",
        headers: {
          Authorization: `${API_KEY}`,
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
      </header>
    </div>
  );
}

export default App;
