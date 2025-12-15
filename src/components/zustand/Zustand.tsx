import { useCounterStore } from "../../store/useCounter";

type Props = {};
const Zustand = ({}: Props) => {
  const count = useCounterStore((state) => state.count);
  const count2 = useCounterStore((state) => state.count2);
  const incrementCount = useCounterStore((state) => state.incrementCount);
  const incrementCount2 = useCounterStore((state) => state.incrementCount2);
  return (
    <div>
      <button onClick={incrementCount}>Increment the count</button>
      <button onClick={incrementCount2}>Increment count2</button>
      <p>Count: {count}</p>
      <p>count2: {count2}</p>
    </div>
  );
};
export { Zustand };
