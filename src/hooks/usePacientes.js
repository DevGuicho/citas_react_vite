import { useContext } from "react";
import PacientesContext from "../state/pacientes/PacientesContext";

const usePacientes = () => {
  const {
    pacientes,
    addPaciente,
    isEditing,
    paciente,
    editPaciente,
    updatePaciente,
    deletePaciente,
  } = useContext(PacientesContext);
  return {
    pacientes,
    addPaciente,
    isEditing,
    paciente,
    editPaciente,
    updatePaciente,
    deletePaciente,
  };
};

export default usePacientes;
