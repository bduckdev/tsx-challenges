interface ButtonProps {
    name: string;
    val: number;
    handlerFunc: () => void;
}
function Button({ name, val, handlerFunc }: ButtonProps) {
    return (
        <button onClick={handlerFunc}>
            {name} is {val}
        </button>
    );
}
export default Button;
