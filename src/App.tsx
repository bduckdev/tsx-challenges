import Button from "./Button";
import "./App.css";
import { useState } from "react";

export interface Count {
  name: string;
  count: number;
}

const initialCounts: Count[] = [
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
  const [counters, setCounters] = useState(initialCounts);

  function incrementCount(i: keyof Count[]) {
    const newCounters: Count[] = [...initialCounts];
    newCounters.map((item, index: keyof Count[]) => {
      if (index === i) {
        item.count = item.count + 1;
      }
      return item;
    });
    setCounters(newCounters);
  }

  function calcTotal() {
    let total = 0;
    initialCounts.forEach((item) => {
      total = total + item.count;
    });
    return total;
  }
  return (
    <>
      <div>
        <span>total count is {calcTotal()}</span>
        {counters.map((item, i: keyof Count[]) => {
          return (
            <Button
              key={item.name}
              name={item.name}
              val={item.count}
              handlerFunc={incrementCount}
              i={i}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
