interface ButtonProps {
    name: string;
    val: number;
    handlerFunc: (index: number) => void;
}
function Button({ name, val, handlerFunc }: ButtonProps) {
    return (
        <button onClick={() => handlerFunc(val)}>
            {name} is {val}
        </button>
    );
}
export default Button;
