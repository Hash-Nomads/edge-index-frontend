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

const useBlockChain = () => {
  const [user, setUser] = useState<UserInfo>({
    etfAmount: 0,
  });
  const [userStake, setUserStake] = useState<number>(0);
  const [reserveLuna, setReserveLuna] = useState<number>(0);
  const [reserveAnc, setReserveAnc] = useState<number>(0);
  const [reserveMir, setReserveMir] = useState<number>(0);
  const [supply, setSupply] = useState(0);

  const lunaAlloc = 0.5;
  const lunaRate = 16.841435;
  const ancRate = 0.062401;
  const mirRate = 1.316558;
  const mirAlloc = 0.25;
  const ancAlloc = 0.25;

  const mint = (amount: number) => {
    const l = (lunaAlloc * amount) / lunaRate;
    const a = (ancAlloc * amount) / ancRate;
    const m = (mirAlloc * amount) / mirRate;
    let mint;
    if (supply == 0) {
      mint = (l * a * m) / 1000;
    } else {
      mint = ((l + a + m) / (reserveAnc + reserveLuna + reserveMir)) * supply;
    }
    console.log(mint);
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

  const ratio = 0.5;

  const borrow = (collateral: number) => {};

  return {
    user,
    userStake,
    stake,
    mint,
  };
};

export default useBlockChain;
