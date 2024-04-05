import React from "react";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const postData = async (data) => {
        const response = await fetch("http://localhost:3000/restaurants", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    };

    const onSubmit = async (data) => {
        const { name, description, address, score, ratings, image } = data;
        try {
            await postData({ name, description, address, score, ratings, image });
            toast.success("Datos guardados correctamente");
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            toast.error("Error al guardar los datos");
        }
        setShowModal(false);
    };

    return (
        <>
            <button
                className=" font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
               Agregar Restaurante
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Agregar Nuevo Restaurante
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
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
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}