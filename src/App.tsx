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
];
function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [counters, setCounters] = useState(counts);

  useEffect(() => {
    calcTotal();
  }, []);
  function incrementCount() {
    const newCounters = counts.map((i) => {
      i.name;
      i.count = i.count + 1;
      return i;
    });
    setCounters(newCounters);
    calcTotal();
  }
  function calcTotal() {
    let total = 0;
    counts.forEach((i) => {
      total = total + i.count;
    });
    console.log(total);
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
