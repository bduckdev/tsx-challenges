interface ButtonProps {
  name: string;
  val: number;
  handlerFunc: () => void;
}
function Button({ name, handlerFunc }: ButtonProps) {
  return <button onClick={handlerFunc}>{name}</button>;
}
export default Button;
