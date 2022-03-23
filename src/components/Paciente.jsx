import React from "react";
import usePacientes from "../hooks/usePacientes";

const Paciente = ({ paciente }) => {
  const { name, propietario, email, alta, sintomas, id } = paciente;
  const { editPaciente, deletePaciente } = usePacientes();
  return (
    <div className="bg-white shadow-md m-3 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 border-2 border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
          onClick={() => editPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-700 font-bold uppercase rounded"
          onClick={() => deletePaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
