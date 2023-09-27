import React from "react";

const SMARTLOCK_ID: string = "18118914148";
const ENDPOINT: string = "https://api.nuki.io/smartlock/";
const API_KEY: string =
  "f6466c0646699cce05e0c920cf1824d7d6271c2c9edef97ea328aa1cb4d0c6b3f0c40644fc8ff876";

const handleOpen = async (): Promise<boolean> => {
  console.log("Opening the lock...");
  try {
    const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/unlock`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });

    if (response.status === 204) {
      console.log("Lock opened");
      return true;
    }

    console.error("Network response was not ok");
    return false;
  } catch (error) {
    console.error("Error opening the lock:", error);
    return false;
  }
};

const handleClose = async (): Promise<boolean> => {
  console.log("Closing the lock...");
  try {
    const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}/action/lock`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });

    if (response.status === 204) {
      console.log("Lock closed");
      return true;
    }

    console.error("Network response was not ok");
    return false;
  } catch (error) {
    console.error("Error closing the lock:", error);
    return false;
  }
};

// Will return the lock state as a number. 1 = locked (show btn unlock), 2 = unlocking (show loading), 3 = unlocked (show btn lock), 4 = locking (show loading), other = error
const handleStatus = async (): Promise<number> => {
  console.log("Checking the lock status...");
  try {
    const response = await fetch(`${ENDPOINT}${SMARTLOCK_ID}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      console.error("Network response was not ok");
      return -1;
    }

    const data = await response.json();
    console.log("Lock status:", data);

    // The smartlock state: type=0/3/4: 0 .. uncalibrated, 1 .. locked, 2 .. unlocking, 3 .. unlocked, 4 .. locking, 5 .. unlatched, 6 .. unlocked (lock 'n' go), 7 .. unlatching, 224 .. Error wrong entry code, 225 .. Error wrong Fingerprint, 254 .. motor blocked, 255 .. undefined; type=2: 0 .. untrained, 1 .. online, 3 .. ring to open active, 5 .. open, 7 .. opening, 253 .. boot run, 255 .. undefined
    const lockState: number = data.state.state;
    console.log("Lock state:", lockState);

    return lockState;
  } catch (error) {
    console.error("Error checking the lock status:", error);
    return -1;
  }
};

export { handleOpen, handleClose, handleStatus };
