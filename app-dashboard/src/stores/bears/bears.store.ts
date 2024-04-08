import { create } from 'zustand'

interface Bear {
    id: number,
    name: string
}

interface BearState {
    blackBears: number,
    polarBears: number,
    pandaBears: number,

    bears: Bear[]
    increaseBlackBear: (by: number) => void,
    increasePolarBear: (by: number) => void,
    increasePandaBear: (by: number) => void,

    doNothing: () => void;
    addBear: () => void,
    clearBear: () => void,

}

const useBearStore = create<BearState>()((set) => ({

    blackBears: 15,
    polarBears: 10,
    pandaBears: 10,

    bears: [],

    increaseBlackBear: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePolarBear: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
    increasePandaBear: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

    doNothing: () => set(state => ({ bears: [...state.bears] })),

    addBear: () => set(state => ({
        bears: [...state.bears, { id: state.bears.length + 1, name: `Oso # ${state.bears.length}` }]
    })),

    clearBear: () => set({ bears: [] }),

}))

export default useBearStore