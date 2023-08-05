// import Header from "./components/Header";
// import Section from "./components/Section";
// import Count from "./components/Count";
// import List from "./components/List";
import CounterWithReducer from "./components/CounterWithReducer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <Header title="Hello" />
      <Section title="Advanced heading">Hello1</Section>
      <Count setCount={setCount}>The count is {count}</Count>
      <List
        items={["Burger", "Pizza", "Burito"]}
        render={(item: string) => <span>{item}</span>}
      /> */}
      <CounterWithReducer>
        {(num: number) => <>Count is {num}</>}
      </CounterWithReducer>
    </>
  );
}

export default App;

{
  /* <List
        items={["Burger", "Pizza", "Watermelon"]}
        render={(item: string) => <span>{item}</span>}
      /> */
}
