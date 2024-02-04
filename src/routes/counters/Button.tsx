import { Count } from "./App";
import CounterContext from "./CounterContext";
import { useContext } from "react";

interface ButtonProps {
  name: string;
  val: number;
  i: keyof Count[];
}
function Button({ name, val, i }: ButtonProps) {
  const handlerFunc = useContext(CounterContext).handlerFunc;
  return (
    <button onClick={() => handlerFunc(i)}>
      {name} is {val}
    </button>
  );
}
export default Button;
