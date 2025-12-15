import { create } from "zustand";

type CounterStoreType = {
  count: number;
  count2: number;
  incrementCount: () => void;
  incrementCount2: () => void;
};

export const useCounterStore = create<CounterStoreType>((set) => ({
  count: 0,
  count2: 10,
  incrementCount: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementCount2: () => {
    set((state) => ({ count2: state.count2 + 1 }));
  },
}));
