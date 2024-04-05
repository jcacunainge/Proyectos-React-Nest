import { create } from 'zustand';

const useStore = create((set) => ({
    restaurants: [],
    addRestaurant: (id, name, description, address, score, ratings, image, date) => set((state) => ({
        restaurants: [...state.restaurants, { id, name, description, address, score, ratings, image, date }],
    })),
}));

export default useStore;
