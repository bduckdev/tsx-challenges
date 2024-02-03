import { createContext } from "react";

type MonkeyContextType = {
  title: string;
  content: string;
  image: string;
};

const MonkeyContext = createContext<MonkeyContextType>({
  title: "Monkey Getting a Haircut",
  content: "His mom said he looks very handsome now",
  image: "monekyHaircut.jpg",
});

export default MonkeyContext;
