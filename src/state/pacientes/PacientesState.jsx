import { useReducer, useEffect } from "react";

import PacientesContext from "./PacientesContext";
import pacientesReducer from "./pacientesReducer";

const PacientesState = ({ children }) => {
  const [state, dispatch] = useReducer(pacientesReducer, {
    pacientes: [],
    paciente: null,
    isEditing: false,
  });
  useEffect(() => {
    dispatch({
      type: "iniPacientes",
      payload: JSON.parse(localStorage.getItem("pacientes")) || [],
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(state.pacientes));
  }, [state.pacientes]);

  const addPaciente = (paciente) => {
    dispatch({
      type: "ADD_PACIENTE",
      payload: paciente,
    });
  };

  const editPaciente = (paciente) =>
    dispatch({
      type: "EDIT_PACIENTE",
      payload: paciente,
    });

  const updatePaciente = (paciente) => {
    dispatch({
      type: "UPDATE_PACIENTE",
      payload: paciente,
    });
  };

  const deletePaciente = (id) => {
    dispatch({
      type: "DELETE_PACIENTE",
      payload: id,
    });
  };
  return (
    <PacientesContext.Provider
      value={{
        pacientes: state.pacientes,
        paciente: state.paciente,
        isEditing: state.isEditing,
        addPaciente,
        editPaciente,
        updatePaciente,
        deletePaciente,
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesState;
