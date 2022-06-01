import create from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 10 })),
  decrement: () => set((state) => ({ count: state.count - 10 })),
}));

export default useCounterStore;
