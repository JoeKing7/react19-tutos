import { Link } from 'react-router';

const CatchAll = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="text-8xl animate-bounce mb-6">🚀</div>
      <h1 className="text-5xl font-bold text-indigo-700 mb-2">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        ¡Ups! No pudimos encontrar esta página.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default CatchAll;
