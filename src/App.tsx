import Button from "./Button";
import "./App.css";
import { useState } from "react";

interface Count {
    name: string;
    count: number;
}

const counts: Count[] = [
    {
        name: "foo",
        count: 68,
    },
    {
        name: "bar",
        count: 419,
    },
    {
        name: "buzz",
        count: 359,
    },
    {
        name: "bazz",
        count: 123,
    },
];
function App() {
    const [counters, setCounters] = useState(counts);

    function incrementCount(oldCount: number) {
        const newCounters = counters.map((item) => {
            if (item.count === oldCount) {
                item.name;
                item.count = item.count + 1;
                return item;
            } else {
                return item;
            }
        });
        console.log(newCounters);
        setCounters(newCounters);
    }
    function calcTotal() {
        let total = 0;
        counts.forEach((item) => {
            total = total + item.count;
        });
        return total;
    }
    return (
        <>
            <div>
                <span>total count is {calcTotal()}</span>
                {counters.map((item) => {
                    return (
                        <Button
                            key={item.name}
                            name={item.name}
                            val={item.count}
                            handlerFunc={incrementCount}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
