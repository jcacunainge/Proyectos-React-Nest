export default function PatientForm() {
    return (

        <div
            className="md:w-1/2 lg:w-2/5 mx-auto bg-cover bg-center"
            style={{ backgroundImage: 'url(https://www.experta.com.ar/blogg/wp-content/uploads/sites/2/2019/01/mascotas.jpg)' }}
        >
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-3 text-center mb-5">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-6 px-4 mb-10" noValidate>
                <div className="mb-4">
                    <label htmlFor="imagen" className="text-sm uppercase font-bold">
                        Imagen del Paciente
                    </label>
                    <input
                        id="imagen"
                        className="w-full p-2 border border-gray-300 rounded"
                        type="file"
                        accept="image/*"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="nombrePaciente" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="nombrePaciente"
                        className="w-full p-2 border border-gray-300 rounded"
                        type="text"
                        placeholder="Nombre del Paciente"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="tipoMascota" className="text-sm uppercase font-bold">
                        Tipo de Mascota
                    </label>
                    <select
                        id="tipoMascota"
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Selecciona Tipo de Mascota</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="propietario" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="propietario"
                        className="w-full p-2 border border-gray-300 rounded"
                        type="text"
                        placeholder="Nombre del Propietario"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="correo" className="text-sm uppercase font-bold">
                        Correo Electrónico
                    </label>
                    <input
                        id="correo"
                        className="w-full p-2 border border-gray-300 rounded"
                        type="email"
                        placeholder="Correo Electrónico de Registro"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="fecha" className="text-sm uppercase font-bold">
                        Fecha de Alta
                    </label>
                    <input
                        id="fecha"
                        className="w-full p-2 border border-gray-300 rounded"
                        type="date"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="estadoCita" className="text-sm uppercase font-bold">
                        Estado de la Cita
                    </label>
                    <select
                        id="estadoCita"
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Selecciona Estado</option>
                        <option value="programada">Programada</option>
                        <option value="completada">Completada</option>
                        <option value="cancelada">Cancelada</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="sintomas" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Síntomas del Paciente"

                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Guardar Paciente"
                />
            </form>
        </div>
    );
}
