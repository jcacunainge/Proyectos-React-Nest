import { useQuery } from '@tanstack/react-query';
import { useParams } from 'wouter';

const fetchRestaurantById = async (id) => {
    const res = await fetch(`http://localhost:3000/restaurants/${id}`);
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
};

const RestaurantDetail = () => {
    const { id } = useParams();
    const {
        data: restaurant,
        isLoading,
        error
    } = useQuery({ queryKey: ["restaurant", id], queryFn: () => fetchRestaurantById(id) });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error fetching Restaurant {error.message}</div>;
    }
    return (
        <div>
            <h1 className='text-3xl title-font font-bold text-center mt-4 mb-7'>{restaurant.name}</h1>
            <div className="flex flex-col items-center">
                <img
                    alt={restaurant.name}
                    className="mb-3 h-[500px] w-full object-cover"
                    src={restaurant.image}
                />
                <h2 className="text-lg font-bold">
                    <span>⭐</span>
                    <span>{restaurant.score}</span>
                    <span className="font-normal opacity-75">({restaurant.ratings})</span>
                </h2>
                <p className="opacity-90">{restaurant.description}</p>
            </div>
        </div>
    );
};

export default RestaurantDetail;
