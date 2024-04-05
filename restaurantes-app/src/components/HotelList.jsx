import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import Modal from './Modal';

const fetchRestaurants = async () => {
    const res = await fetch("http://localhost:3000/restaurants");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    console.log(res)
    return res.json();
};

const RestaurantList = () => {
    const {
        data: restaurants,
        isLoading,
        error
    } = useQuery({ queryKey: ["restaurants"], queryFn: fetchRestaurants });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error fetching Restaurants {error.message}</div>;
    }
    return (
        <>
            <h1 className='text-3xl title-font font-bold text-center mt-4 mb-7'>App restaurant</h1>
            <Modal></Modal>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
                {restaurants.map((restaurant) => {
                    return (
                        <article key={restaurant.id} className='bg-slate-400'>
                            <img
                                alt={restaurant.name}
                                className="mb-3 h-[200px] w-svw object-cover"
                                src={restaurant.image}
                            />
                            <h2 className="inline-flex gap-2 text-lg font- p-2">
                                <span>{restaurant.name}</span>
                                <small className="inline-flex gap-1">
                                    <span>⭐</span>
                                    <span>{restaurant.score}</span>
                                    <span className="font-normal opacity-75">({restaurant.ratings})</span>
                                </small>
                            </h2>
                            <p className="opacity-90 p-2">{restaurant.description}</p>
                            <Link href={`/restaurant/${restaurant.id}`}>
                                <p className='mt-5 bg-sky-700 w-full-2/3 text-white hover:bg-sky-600 p-1 hover:text-black'>Mas Información</p>
                            </Link>
                        </article>
                    );
                })}
            </section>
        </>
    );
};

export default RestaurantList;
