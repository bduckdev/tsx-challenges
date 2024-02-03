import Card from "./Card";
import { useContext } from "react";
import MonkeyContext from "./MonkeyContext";

function MonkeyCard() {
    const monkey = useContext(MonkeyContext);

    return (
        <MonkeyContext.Provider value={monkey}>
            <Card title={monkey.title}>
                <img src={monkey.image} alt={monkey.title} />
                <p>{monkey.content}</p>
            </Card>
        </MonkeyContext.Provider>
    );
}

export default MonkeyCard;
