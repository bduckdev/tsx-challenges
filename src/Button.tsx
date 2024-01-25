interface ButtonProps {
  name: string;
  val: number;
  handlerFunc: (index: number) => void;
}
function Button({ name, val, handlerFunc }: ButtonProps) {
  console.log(val);
  return <button onClick={() => handlerFunc(1)}>{name}</button>;
}
export default Button;
