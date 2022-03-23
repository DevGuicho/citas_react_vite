import { useState, memo, useEffect } from "react";
import usePacientes from "../hooks/usePacientes";
import Error from "./Error";

const initialStateForm = {
  name: "",
  propietario: "",
  email: "",
  alta: "",
  sintomas: "",
};

const Formulario = () => {
  const { addPaciente, paciente, isEditing, updatePaciente, deletePaciente } =
    usePacientes();
  const [error, setError] = useState(false);
  const [form, setForm] = useState(initialStateForm);

  useEffect(() => {
    if (paciente) setForm(paciente);
  }, [paciente]);

  const genId = () => {
    return Date.now().toString() + Math.random().toString().substring(2);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      setError(true);
      return;
    }
    if (!form.propietario) {
      setError(true);
      return;
    }
    if (!form.email) {
      setError(true);
      return;
    }
    if (!form.alta) {
      setError(true);
      return;
    }
    if (!form.sintomas) {
      setError(true);
      return;
    }
    setError(false);
    if (isEditing) updatePaciente({ id: paciente.id, ...form });
    else addPaciente({ id: genId(), ...form });
    setForm(initialStateForm);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 md:mb-0">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md py-10 px-5 rounded-md"
        onSubmit={handleSubmit}
      >
        {error && <Error message={"Por favor llena todos los campos"} />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="name"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-blue-500"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre de la Mascota"
            autoComplete="off"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-blue-500"
            type="text"
            name="propietario"
            id="propietario"
            placeholder="Nombre del Propietario"
            autoComplete="off"
            onChange={handleChange}
            value={form.propietario}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-blue-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email de contacto"
            autoComplete="off"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-blue-500"
            type="date"
            name="alta"
            id="alta"
            onChange={handleChange}
            value={form.alta}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-blue-500"
            type="date"
            name="sintomas"
            id="sintomas"
            placeholder="Describe brevemente los sintomas"
            onChange={handleChange}
            value={form.sintomas}
          />
        </div>
        <input
          type="submit"
          value={isEditing ? "Editar Paciente" : "Agregar Paciente"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default memo(Formulario);
