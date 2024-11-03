import Header from "../components/Header";
import Banner from "../components/Baner";
import Servicios from "./servicios/servicesPage";
import PetCard from "../components/PetCard";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";



export default function indexPage() {

    // Define un objeto con los datos de la mascota, incluyendo las propiedades faltantes
    const petData = {
        image: "https://www.respetmascotas.com/_Assets/img/181129-Imagen-AlimentacionMascotas.jpg",
        patientName: "Firulais",
        petType: "Perro",
        appointmentDate: "2023-11-05",
        appointmentTime: "10:30 AM",
        description: "Corte de uñas y limpieza",
        appointmentStatus: "Confirmada",
        patientPropietary: "Juan Pérez",
        email: "juan.perez@example.com"
    };

    return (
        <>
            <Header />
            <Banner />
            <Nosotros />

            <Servicios />
            <ContactSection />


            <Footer />

            <div className="container mx-auto ">
                <h1 className="font-black text-3xl text-center md:w-2/3 md:mx-auto">
                    Seguimiento Pacientes <span className="text-indigo-700">Veterinaría</span>
                </h1>

                <div className="mt-12 md:flex">
                    {/* Pasando el objeto petData como prop */}
                    <PetCard pet={petData} />
                </div>
            </div>
        </>
    );

}
