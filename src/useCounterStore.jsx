import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  step: 1,
  increment: () => set((state) => ({ count: state.count + state.step })),
  decrement: () => set((state) => ({ count: state.count - state.step })),
  reset: () =>
    set(() => {
      console.log("Reset called");
      return { count: 0, step: 1 };
    }),
  setStep: (newStep) => set(() => ({ step: newStep })),
}));

export default useCounterStore;
