

const Nosotros = () => {
    return (
        <div className="nosotros-container py-28 px-5 flex flex-col md:flex-row items-center">
            <div className="image-container md:w-1/2">
                <img
                    src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-veterinarian-clinic-vet-pet-doctor-picture-image_8701040.png" // Cambia esta URL por la imagen que desees
                    alt="Veterinaria"
                    className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                    width={450}
                    height={350}
                />
            </div>
            <div className="text-container md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">Sobre Nosotros</h2>
                <p className="text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    En nuestra veterinaria, nos apasiona cuidar de tus mascotas como si fueran parte de nuestra familia.
                    Contamos con un equipo de profesionales altamente capacitados y equipamiento de última tecnología
                    para garantizar la salud y bienestar de tus amigos peludos.
                </p>
                <p className="text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-2s">
                    Ofrecemos servicios de consulta, vacunación, cirugía, y mucho más. Nuestra misión es proporcionar
                    un ambiente acogedor y seguro para tus mascotas, asegurando que reciban la mejor atención posible.
                </p>
                <button className="bg-green-500 text-white py-2 px-4 rounded-full shadow-md transition duration-300 hover:bg-green-600 animate__animated animate__fadeIn animate__delay-3s">
                    Conócenos
                </button>
            </div>
        </div>
    );
};

export default Nosotros;
