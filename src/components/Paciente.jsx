
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente;    

    const handleEliminar = () =>{
        const respuesta = confirm(`¿Deseas eliminar el paciente ${nombre}?`);        
        if(respuesta){
            eliminarPaciente(id);
        }
    }
  return (
    <div className="mx-5 my-8 px-5 py-6 rounded-xl bg-white shadow-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} 
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} 
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''} 
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''} 
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex gap-5 mt-10">
            <button 
                className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm tracking-wide uppercase rounded-lg"
                type="button" onClick={() => setPaciente(paciente)}>
                Editar
            </button>
            <button className="py-2 px-5 text-sm bg-red-600 hover:bg-red-700 text-white font-semibold uppercase rounded-lg" 
                type="button" onClick={handleEliminar}>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente;
