import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../../features/counter/counterSlice";

import styles from "./index.module.css";

let person = {
  firstName: "Bob",
  lastName: "Loblaw",
  address: {
    street: "123 Fake St",
    city: "Emberton",
    state: "NJ",
  },
};

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  const giveAwesomePowers = (person: any) => {
    let newPerson = {
      ...person,
      specialPower: "invisibility",
    };

    return newPerson;
  };

  useEffect(() => {
    console.log("111111", person);

    let samePerson = giveAwesomePowers(person);

    console.log("22222", person);
    console.log("samePerson", samePerson);

    console.log("Are they the same?", person === samePerson);
  }, []);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
