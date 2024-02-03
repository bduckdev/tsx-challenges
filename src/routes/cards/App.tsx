import monkeyHaircut from "../../images/monkey-haircut.jpg";
import monkeyDrinking from "../../images/monkey-drinking.jpg";
import spinningGorilla from "../../images/spinning-gorilla.gif";
import { useState } from "react";
import MonkeyContext from "./MonkeyContext";
import MonkeyCard from "./MonkeyCard";

export type CardType = {
  title: string;
  content: string;
  image: string;
};

const cards: CardType[] = [
  {
    title: "Monkey Getting a Haircut",
    content: "His mom said he looks very handsome now",
    image: monkeyHaircut,
  },
  {
    title: "Monkey Drinking Capri Sun",
    content: "He's a little thirsty",
    image: monkeyDrinking,
  },
  {
    title: "SPINNING GORILLA!",
    content: "Very spinny",
    image: spinningGorilla,
  },
];

function App() {
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const monkeyNumber = cards.indexOf(currentCard);
  const totalMonkeys = cards.length;

  function changeCard(step: number) {
    if (monkeyNumber + step < 0) {
      return;
    } else if (monkeyNumber + step >= cards.length) {
      return;
    }
    setCurrentCard(cards[monkeyNumber + step]);
  }
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">Monkey Gallery</h1>
      <p className="text-xl font-normal text-center mt-3">
        Current Monkey: {monkeyNumber + 1} of {totalMonkeys}
      </p>
      <div className="pt-10 flex gap-10 justify-center">
        <button onClick={() => changeCard(-1)}>Previous Monkey</button>
        <button onClick={() => changeCard(1)}>Next Monkey</button>
      </div>
      <div>
        <MonkeyContext.Provider value={currentCard}>
          <MonkeyCard />
        </MonkeyContext.Provider>
      </div>
    </>
  );
}
export default App;
