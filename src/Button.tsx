import { Count } from "./App";
interface ButtonProps {
  name: string;
  val: number;
  handlerFunc: (i: keyof Count[]) => void;
  i: keyof Count[];
}
function Button({ name, val, handlerFunc, i }: ButtonProps) {
  return (
    <button onClick={() => handlerFunc(i as keyof Count[])}>
      {name} is {val}
    </button>
  );
}
export default Button;
