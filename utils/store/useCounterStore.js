import create from 'zustand';
import produce from 'immer';

const useCounterStore = create((set, get) => ({
  count: 0,
  darkTheme: true,
  schoolStrength: { school: { strength: 20 } },
  increment: () => set((state) => ({ count: state.count + 10 })),
  decrement: () => set((state) => ({ count: state.count - 10 })),
  toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
  actions: () => {
    const count = get().count;
    return count;
  },
  addNewStudent: () =>
    set(
      produce((state) => {
        state.schoolStrength.school.strength += 1;
      }),
    ),
}));

export default useCounterStore;
