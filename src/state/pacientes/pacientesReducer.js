export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_PACIENTE":
      return { ...state, pacientes: [...state.pacientes, action.payload] };
    case "EDIT_PACIENTE":
      return {
        ...state,
        paciente: action.payload,
        isEditing: true,
      };
    case "UPDATE_PACIENTE":
      return {
        ...state,
        isEditing: false,
        pacientes: state.pacientes.map((paciente) => {
          if (paciente.id === action.payload.id) return action.payload;
          return paciente;
        }),
      };
    case "DELETE_PACIENTE":
      return {
        ...state,
        pacientes: state.pacientes.filter(
          (pacientes) => pacientes.id !== action.payload
        ),
      };
    case "iniPacientes":
      return { ...state, pacientes: action.payload };
    default:
      return state;
  }
};
