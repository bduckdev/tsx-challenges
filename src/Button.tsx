interface ButtonProps {
    name: string;
    val: number;
    handlerFunc: (name: string) => void;
}
function Button({ name, val, handlerFunc }: ButtonProps) {
    return (
        <button onClick={() => handlerFunc(name)}>
            {name} is {val}
        </button>
    );
}
export default Button;
