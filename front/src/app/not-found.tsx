import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orangeBase">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Página no encontrada</p>
        <Link
          href="/home"
          className="bg-gradient-to-r from-bluePlus to-blue hover:bg-orangeFull text-black font-bold py-2 px-4 rounded-md mr-4"
        >
          Regresar a Inicio
        </Link>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-blue to-bluePlus hover:bg-orangeFull text-black font-bold py-2 px-4 rounded-md mr-4"
        >
          Contactar a soporte
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
