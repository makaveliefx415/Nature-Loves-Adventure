import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 py-10">
      {/* Image Section */}
      <img
        src="https://illustrations.popsy.co/gray/web-error.svg"
        alt="404"
        className="w-64 md:w-1/3 mb-8 md:mb-0 md:mr-10 animate-fade-in"
      />

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600">404</h1>
        <p className="text-xl md:text-2xl text-gray-800 mt-4">
          Page not found
        </p>
        <p className="text-gray-500 mt-2 text-base md:text-lg">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-md active:scale-95"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}