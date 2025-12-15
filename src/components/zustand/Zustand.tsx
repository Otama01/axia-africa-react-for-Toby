import { useCounterStore } from "../../store/useCounter";

type Props = {};
const Zustand = ({}: Props) => {
  const count1 = useCounterStore((state) => state.count1);
  const count2 = useCounterStore((state) => state.count2);
  const incrementCount1 = useCounterStore((state) => state.incrementCount1);
  const incrementCount2 = useCounterStore((state) => state.incrementCount2);
  return (
    <div>
      <button onClick={incrementCount1}>Increment the count</button>
      <button onClick={incrementCount2}>Increment count2</button>
      <p>Count: {count1}</p>
      <p>count2: {count2}</p>
    </div>
  );
};
export { Zustand };
