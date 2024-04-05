import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useStore from '../store';

const RestaurantForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const addRestaurant = useStore((state) => state.addRestaurant);

    const onSubmit = (data) => {
        const { name, description, address, score, ratings, image } = data;
        addRestaurant(name, description, address, score, ratings, image);
        toast.success("Datos guardados correctamente");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-8">
            <label className="block mb-4">
                <span className="block mb-2">Name:</span>
                <input type="text" {...register('name', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
                {errors.name && <span className="text-red-500 text-sm">Campo requerido</span>}
            </label>
            <label className="block mb-4">
                <span className="block mb-2">Description:</span>
                <textarea {...register('description', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
                {errors.description && <span className="text-red-500 text-sm">Campo requerido</span>}
            </label>
            <label className="block mb-4">
                <span className="block mb-2">Address:</span>
                <input type="text" {...register('address', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
                {errors.address && <span className="text-red-500 text-sm">Campo requerido</span>}
            </label>
            <label className="block mb-4">
                <span className="block mb-2">Score:</span>
                <input type="number" {...register('score', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
                {errors.score && <span className="text-red-500 text-sm">Campo requerido</span>}
            </label>
            <label className="block mb-4">
                <span className="block mb-2">Ratings:</span>
                <input type="number" {...register('ratings', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
                {errors.ratings && <span className="text-red-500 text-sm">Campo requerido</span>}
            </label>
            <label className="block mb-4">
                <span className="block mb-2">Image URL:</span>
                <input type="text" {...register('image', { required: true })} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
                {errors.image && <span className="text-red-500 text-sm">Campo requerido</span>}
            </label>
           
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
    );
};

export default RestaurantForm;


