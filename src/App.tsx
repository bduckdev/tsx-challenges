import Button from "./Button";
import "./App.css";
import { useEffect, useState } from "react";

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
];
function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [counters, setCounters] = useState(counts);

  useEffect(() => {
    calcTotal();
  }, []);
  function incrementCount(newIndex: number) {
    const newCounters = counters.map((item, index) => {
      if (index === newIndex) {
        item.name;
        item.count = item.count + 1;
        setTotalCount(totalCount + 1);
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
    setTotalCount(total);
  }
  return (
    <>
      <div>
        <span>total count is {totalCount}</span>
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
