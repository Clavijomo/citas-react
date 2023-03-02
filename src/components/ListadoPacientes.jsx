import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {  
    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>                
                    <h2 className="font-bold text-3xl text-center">Listado pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Administra tus{' '}
                        <span className="text-indigo-600 font-normal">pacientes y citas</span>
                    </p>            
            
                    {pacientes.map(item =>(
                        < Paciente                              
                            key={item.id}
                            paciente={item}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />            
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-bold text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes{' '}
                        <span className="text-indigo-600 font-normal">y aparecerán en este lugar</span>
                    </p>            
                </>
            )}        
        </div>            
    )
}

export default ListadoPacientes; 