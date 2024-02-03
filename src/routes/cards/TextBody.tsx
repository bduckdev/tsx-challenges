import { useContext } from "react";
import MonkeyContext from "./MonkeyContext";

function TextBody() {
    const monkey = useContext(MonkeyContext);
    return (
        <>
            <h2 className="font-black text-xl">{monkey.title}</h2>
            <p className="font-mono">{monkey.content}</p>
        </>
    );
}
export default TextBody;
