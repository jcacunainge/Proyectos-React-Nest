import {  type StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PeopleState {
    firstName: string;
    lastName: string;
}

interface Actions {
    setFirstName: (value: string) => void;
    setLastName: (value: string) => void;
}

const storeApi: StateCreator <PeopleState & Actions> = (set) => ({
    firstName: '',
    lastName: '',
    setFirstName: (value: string) => set({ firstName: value }),
    setLastName: (value: string) => set({ lastName: value }),
})

const usePeopleStore = create<PeopleState & Actions> () (
    persist(
        storeApi,
        { name: 'person-storage' } 
    )
);

export default usePeopleStore;
