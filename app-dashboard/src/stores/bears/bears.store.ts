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

    computed: { totalBears: number }

    increaseBlackBear: (by: number) => void,
    increasePolarBear: (by: number) => void,
    increasePandaBear: (by: number) => void,

    addBear: () => void,
    clearBear: () => void,
}

const useBearStore = create<BearState>()((set, get) => ({

    blackBears: 15,
    polarBears: 10,
    pandaBears: 10,

    bears: [],

    computed: { 
        get totalBears(){
            return get().blackBears + get().pandaBears + get().polarBears
        }
     },

    increaseBlackBear: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePolarBear: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
    increasePandaBear: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

    addBear: () => set(state => ({
        bears: [...state.bears, { id: state.bears.length + 1, name: `Oso # ${state.bears.length}` }]
    })),

    clearBear: () => set({ bears: [] }),

}))

export default useBearStore