
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 px-5">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Veterinaria Ejemplo</h3>
                    <p className="flex items-center mb-2">
                        <FaPhone className="mr-2" /> +123 456 7890
                    </p>
                    <p className="flex items-center mb-2">
                        <FaEnvelope className="mr-2" /> contacto@veterinariaejemplo.com
                    </p>
                    <p className="mb-2">Dirección: Calle Falsa 123, Ciudad, País</p>
                </div>
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Síguenos</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-400 transition-colors duration-300"
                        >
                            <FaFacebookF className="text-2xl" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-400 transition-colors duration-300"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-400 transition-colors duration-300"
                        >
                            <FaTwitter className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-6 text-center">
                <p className="text-sm">© {new Date().getFullYear()} Veterinaria Ejemplo. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
