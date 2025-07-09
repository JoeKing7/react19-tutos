import { create } from 'zustand';

interface Bear {
  id: number;
  name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: Bear[];
  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearsStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 3,

  bears: [
    { id: 1, name: 'Black Bear' },
    { id: 2, name: 'Polar Bear' },
    { id: 3, name: 'Panda Bear' },
  ],

  increaseBlackBears: (by: number) =>
    set((state) => ({
      blackBears: state.blackBears + by,
    })),

  increasePolarBears: (by: number) =>
    set((state) => ({
      polarBears: state.polarBears + by,
    })),
  increasePandaBears: (by: number) =>
    set((state) => ({
      pandaBears: state.pandaBears + by,
    })),

  doNothing: () =>
    set((state) => ({
      bears: [...state.bears],
    })),

  addBear: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: `Bear ${state.bears.length + 1}` },
      ],
    })),

  clearBears: () =>
    set({
      bears: [],
    }), // tambien funciona sin el set, si queremos usar el state debemos tambien colocar el get (al lado del set)
}));
