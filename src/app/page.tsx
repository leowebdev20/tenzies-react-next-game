'use client';
import { useState } from "react";
import Image from "next/image";
import Die from "./Die";

export default function Home() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const diceElements = dice.map((die) => <Die key={die} value={die} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}
