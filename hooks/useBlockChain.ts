import { info } from "autoprefixer";
import _, { set } from "lodash";
import { useState, useEffect } from "react";

// type Asset {
//     amount:
// }

type EtfInfo = {
  amount: number;
};

type UserInfo = {
  etfAmount: number;
};
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

const useBlockChain = () => {
  const [user, setUser] = useLocalStorage("user", {
    etfAmount: 0,
  });
  const [userStake, setUserStake] = useLocalStorage("userStake", 0);
  const [reserveLuna, setReserveLuna] = useLocalStorage("reserevLuna", 0);
  const [reserveAnc, setReserveAnc] = useLocalStorage("reserveAnc", 0);
  const [reserveMir, setReserveMir] = useLocalStorage("reserveMir", 0);
  const [supply, setSupply] = useLocalStorage("supply", 0);

  const lunaAlloc = 0.5;
  const lunaRate = 16.841435;
  const ancRate = 0.062401;
  const mirRate = 1.316558;
  const mirAlloc = 0.25;
  const ancAlloc = 0.25;

  const getLuna =
    (user.etfAmount * lunaAlloc * lunaRate * reserveLuna) /
    (supply === 0 ? -1 : supply);

  const getAnc = (user.etfAmount * reserveAnc) / (supply === 0 ? -1 : supply);

  const getMir = (user.etfAmount * reserveMir) / (supply === 0 ? -1 : supply);

  const mint = (amount: number) => {
    const l = (lunaAlloc * amount) / lunaRate;
    const a = (ancAlloc * amount) / ancRate;
    const m = (mirAlloc * amount) / mirRate;
    let mint;
    if (supply == 0) {
      mint = l + a + m;
    } else {
      mint = ((l + a + m) / (reserveAnc + reserveLuna + reserveMir)) * supply;
    }
    console.log(mint);
    console.log({ l, a, m });
    console.log({ reserveMir, reserveAnc, reserveLuna });
    console.log(supply);
    setUser((info) => {
      return { ...info, etfAmount: info.etfAmount + mint };
    });
    setSupply(supply + mint);
    setReserveAnc(reserveAnc + a);
    setReserveLuna(reserveLuna + l);
    setReserveMir(reserveMir + m);
  };

  const stake = (amount: number) => {
    if (user.etfAmount - amount < 0) throw Error("not enough money");
    setUser((info) => {
      return {
        ...info,
        etfAmount: info.etfAmount - amount,
      };
    });
    setUserStake(amount);
  };

  const redeem = (amount: number) => {
    if (user.etfAmount - amount < 0) throw Error("not enough money");
    setUser((info) => {
      return {
        ...info,
        etfAmount: info.etfAmount - amount,
      };
    });
  };

  const ratio = 0.5;

  const borrow = (collateral: number) => {};

  return {
    user,
    userStake,
    stake,
    mint,
    getAnc,
    getLuna,
    getMir,
  };
};

export default useBlockChain;
