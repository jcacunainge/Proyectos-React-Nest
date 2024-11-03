// Definir la interfaz Pet
interface Pet {
    image: string;
    patientName: string;
    petType: string;
    patientPropietary: string;
    appointmentDate: string;
    description: string;
    email: string;
    appointmentStatus: string;
}

interface PetCardProps {
    pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
    const { image, patientName, petType, patientPropietary, appointmentDate, description, email, appointmentStatus } = pet;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full h-48 object-cover" src={image} alt={`${patientName}'s pet`} />

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{patientName}</div>
                <p className="text-gray-700 text-base">Tipo Mascota: {petType}</p>
                <p className="text-gray-700 text-base">Propietario: {patientPropietary}</p>
                <p className="text-gray-700 text-base">Fecha de Alta: {appointmentDate}</p>
                <p className="text-gray-700 text-base">Sintomas: {description}</p>
                <p className="text-gray-700 text-base">Email: {email}</p>
                <p className="text-gray-700 text-base">Estado de cita: {appointmentStatus}</p>
            </div>

            <div className="px-6 py-4 flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default PetCard;
