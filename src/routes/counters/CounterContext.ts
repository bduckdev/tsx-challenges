import { createContext } from "react";
import { Count } from "./App";

type CounterContextType = {
  handlerFunc: (i: keyof Count[]) => void;
};

const CounterContext = createContext<CounterContextType>({
  handlerFunc: () => {},
});

export default CounterContext;
