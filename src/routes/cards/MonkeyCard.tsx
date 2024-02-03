import Card from "./Card";
import { useContext } from "react";
import MonkeyContext from "./MonkeyContext";
import TextBody from "./TextBody";

function MonkeyCard() {
    const monkey = useContext(MonkeyContext);

    return (
        <Card>
            <img
                className="w-56 h-56 fill rounded-xl"
                src={monkey.image}
                alt={monkey.title}
            />
            <div className="flex flex-col text-right justify-evenly w-96">
                <TextBody />
            </div>
        </Card>
    );
}

export default MonkeyCard;
