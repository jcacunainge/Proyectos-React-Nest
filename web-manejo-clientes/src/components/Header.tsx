
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

const Header = () => {
    return (
        <header className="bg-gray-100 text-black fixed w-full z-10 shadow-lg transition duration-300 ease-in-out">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Veterinaria XYZ</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:text-green-300 transition duration-300 ease-in-out">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/sobre-nosotros" className="hover:text-green-300 transition duration-300 ease-in-out">Sobre Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/servicios" className="hover:text-green-300 transition duration-300 ease-in-out">Servicios</Link>
                        </li>
                        <li>
                            <Link to="/contacto" className="hover:text-green-300 transition duration-300 ease-in-out">Contacto</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;