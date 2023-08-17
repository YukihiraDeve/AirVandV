import React, { useState } from 'react';

function NukiComponent() {
  const [lockName, setLockName] = useState("");
  const API_URL = "https://api.nuki.io/oauth/authorize/smartlock";

  const API_TOKEN =  "ea7944a0856b43064190e9098d35255a07957d7928a06e6b246507b24d38617988c04083bfbec046"

  const getLockName = async () => {
    try {
      const response = await fetch(`${API_URL}/lock-endpoint`, { 
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });
      const data = await response.json();
      setLockName(data.name); 
    } catch (error) {
      console.error("Erreur lors de la récupération du nom du cadenas:", error);
    }
  };

  const unlock = async () => {
    try {
      await fetch(`${API_URL}/unlock-endpoint`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });
    } catch (error) {
      console.error("Erreur lors du déverrouillage:", error);
    }
  };

  const lock = async () => {
    try {
      await fetch(`${API_URL}/lock-endpoint`, { 
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });
    } catch (error) {
      console.error("Erreur lors du verrouillage:", error);
    }
  };

  return (
    <div>
      <h1>Nuki Lock Control</h1>
      <button onClick={getLockName}>Get Lock Name</button>
      <p>Lock Name: {lockName}</p>
      <button onClick={unlock}>Unlock</button>
      <button onClick={lock}>Lock</button>
    </div>
  );
}



export default NukiComponent;
