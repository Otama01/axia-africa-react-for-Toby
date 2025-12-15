import { create } from "zustand";

type CounterStoreType = {
  count1: number;
  count2: number;
  incrementCount1: () => void;
  incrementCount2: () => void;
  decrementCount1: () => void;
  decrementCount2: () => void;
};

export const useCounterStore = create<CounterStoreType>((set, get) => ({
  count1: 0,
  count2: 10,
  incrementCount1: () => {
    set((state) => ({ count1: state.count1 + 1 }));
  },
  incrementCount2: () => {
    set((state) => ({ count2: state.count2 + 5 }));
  },
  decrementCount1: () => {
    set((state) => ({ count1: state.count1 - 1 }));
  },
  decrementCount2: () => {
    const count2 = get().count2;
    if (count2 <= 5) return;

    set((state) => ({ count2: state.count2 - 5 }));
  },
}));
