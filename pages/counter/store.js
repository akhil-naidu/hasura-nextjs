import create from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  darkTheme: true,
  increment: () => set((state) => ({ count: state.count + 10 })),
  decrement: () => set((state) => ({ count: state.count - 10 })),
  toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
}));

export default useCounterStore;
