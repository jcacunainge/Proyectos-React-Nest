

const Servicios = () => {
    const serviciosList = [
        {
            id: 1,
            titulo: "Consulta Veterinaria",
            descripcion: "Brindamos atención personalizada y profesional para tus mascotas.",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZomdtx7WjIk0-XJkXsp_Wu90ejqs_LhsFQ&s",
            duracion: "30 minutos",
            costo: "$20",
            enlace: "/servicios/consulta-veterinaria"
        },
        {
            id: 2,
            titulo: "Vacunación",
            descripcion: "Aseguramos la salud de tu mascota con un programa de vacunación completo.",
            imagen: "https://st.depositphotos.com/4631829/54091/v/450/depositphotos_540919064-stock-illustration-pet-veterinarian-veterinary-doctor-checking.jpg",
            duracion: "15 minutos",
            costo: "$15",
            enlace: "/servicios/vacunacion"
        },
        {
            id: 3,
            titulo: "Baño y Aseo",
            descripcion: "Servicios de higiene y cuidado estético para tu mascota.",
            imagen: "https://img.freepik.com/vector-premium/alegre-peluquero-perros-lava-perro-peludo_854757-16316.jpg",
            duracion: "45 minutos",
            costo: "$30",
            enlace: "/servicios/bano-y-aseo"
        },
        {
            id: 4,
            titulo: "Cirugía",
            descripcion: "Contamos con un equipo especializado para realizar cirugías seguras.",
            imagen: "https://png.pngtree.com/png-clipart/20230115/original/pngtree-hand-drawn-medical-health-pet-dog-surgery-elements-png-image_8912456.png",
            duracion: "2 horas",
            costo: "$200",
            enlace: "/servicios/cirugia"
        },
        {
            id: 5,
            titulo: "Control de Parásitos",
            descripcion: "Ofrecemos tratamientos preventivos para mantener a tu mascota libre de parásitos.",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ60v0llPNEeZndFP9jOeHc7fO9PS8PoV1kA&s",
            duracion: "20 minutos",
            costo: "$25",
            enlace: "/servicios/control-de-parasitos"
        },
        {
            id: 6,
            titulo: "Radiografías",
            descripcion: "Contamos con tecnología avanzada para realizar radiografías y diagnósticos precisos.",
            imagen: "https://w7.pngwing.com/pngs/61/985/png-transparent-radiography-diagnostic-test-medical-laboratory-medicine-esophagogastroduodenoscopy-xray-horse-mammal-cat-like-mammal.png",
            duracion: "30 minutos",
            costo: "$50",
            enlace: "/servicios/radiografias"
        },
        {
            id: 7,
            titulo: "Terapia de Comportamiento",
            descripcion: "Ayudamos a tu mascota a superar problemas de comportamiento con técnicas especializadas.",
            imagen: "https://img.freepik.com/vector-premium/psicologo-animal-sentado-sofa-dachshund-mujer-ayudando-perro-traves-ilustracion-vectorial-plana-terapia-cuidado-animales-mascotas-concepto-salud-banner-diseno-sitio-web-o-pagina-web-inicio_74855-23942.jpg",
            duracion: "1 hora",
            costo: "$40",
            enlace: "/servicios/terapia-de-comportamiento"
        },
        {
            id: 8,
            titulo: "Alimentación y Nutrición",
            descripcion: "Asesoramos sobre la mejor alimentación para la salud y bienestar de tu mascota y este saludable.",
            imagen: "https://img.freepik.com/vector-premium/envasado-alimentos-mascotas-alimentos-dibujos-animados-gatos-perros-juguetes-accesorios-aseo-animales-domesticos-alimentacion-concepto-atencion-veterinaria-ilustracion-vectorial_102902-7292.jpg",
            duracion: "30 minutos",
            costo: "$20",
            enlace: "/servicios/alimentacion-y-nutricion"
        },
    ];

    return (
        <div className="py-10 px-5 bg-green-50">
            <h2 className="text-3xl text-center font-bold mb-8">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {serviciosList.map((servicio) => (
                    <div key={servicio.id} className="bg-white rounded-lg shadow-md p-4 hover:scale-105 border border-gray-200">
                        <img src={servicio.imagen} alt={servicio.titulo} className="w-full h-40 object-contain rounded-t-lg" />

                        <h3 className="text-1xl font-semibold mt-4 text-indigo-500">{servicio.titulo}</h3>
                        <p className="text-gray-600 mt-2 text-sm text-justify">{servicio.descripcion}</p>
                        <p className="text-gray-500 mt-1 text-xs">Duración: {servicio.duracion}</p>
                        {/* <a href={servicio.enlace} className="text-indigo-400 hover:underline mt-2 inline-block">
                            Más detalles
                        </a> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Servicios;
