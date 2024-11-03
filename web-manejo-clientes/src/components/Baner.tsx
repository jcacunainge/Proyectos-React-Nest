const Banner = () => {
    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <img
                src="https://www.experta.com.ar/blogg/wp-content/uploads/sites/2/2019/01/mascotas.jpg"
                alt="Mascotas"
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-lg">
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center shadow-lg">
                    Cuidamos a tus Mascotas como si fueran parte de la Familia
                </h2>
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <a
                    href="#"
                    className="bg-white text-black py-2 px-4 rounded-full shadow-lg transition duration-300 hover:bg-gray-300"
                >
                    Saber Más
                </a>
            </div>
        </div>
    );
};

export default Banner;
