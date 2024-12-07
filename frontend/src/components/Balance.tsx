import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  const decodeToken = (token: string | null): string | null => {
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.userId; 
    } catch (err) {
      console.error("Failed to decode token", err);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = decodeToken(token);

    if (userId) {
      axios
        .get("http://localhost:3000/api/v1/account/balance", {
          params: { userId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setBalance(response.data.balance);
        })
        .catch((err) => {
          console.error("Error fetching balance:", err);
        });
    }
  }, []);

  return (
    <div className="flex">
      <div className="font-bold text-2xl  pl-6 pt-4">Available Balance</div>
      <div className="font-semibold text-2xl ml-4 pt-4">Rs {balance}</div>
    </div>
  );
};