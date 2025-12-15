import { create } from "zustand";

type CounterStoreType = {
  count1: number;
  count2: number;
  incrementCount1: () => void;
  incrementCount2: () => void;
};

export const useCounterStore = create<CounterStoreType>((set) => ({
  count1: 0,
  count2: 10,
  incrementCount1: () => {
    set((state) => ({ count1: state.count1 + 1 }));
  },
  incrementCount2: () => {
    set((state) => ({ count2: state.count2 + 5 }));
  },
}));
