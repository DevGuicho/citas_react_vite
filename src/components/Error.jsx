const Error = ({ message }) => {
  return (
    <div className="block text-center mb-5 py-2 bg-red-600 rounded-sm font-bold text-red-100">
      <p>{message}</p>
    </div>
  );
};

export default Error;
