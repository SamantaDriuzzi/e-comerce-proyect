import { Tiro_Devanagari_Sanskrit } from "next/font/google";

const TiroDevanagariSanskrit = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["latin"],
});

const Newslatter = () => {
  return (
    <div className="w-full bg-transparent relative mt-32 mb-52">
      <div className="bg-orange w-4/6 ml-0 h-500">
        {/* texto grande */}
        <div
          className="mr-0 text-6xl p-6 text-right"
          style={{ fontFamily: TiroDevanagariSanskrit.className }}
        >
          Suscríbete a
          <br />
          nuestro Newsletter
        </div>
        {/* texto chico */}
        <div className="mr-0 text-3xl text-right pr-6">
          y recibe un 10% off en cualquier
          <br />
          producto.
        </div>
      </div>
      <form action="#" className="relative ml-60 mt-top ">
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full ">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-gray-900 bg-blue"
            >
              Email address
            </label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-10 h-10 text-gray-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              className="s pl-14 block p-3 w-full text-lg text-gray-900 rounded-full border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-blue"
              placeholder="           Ingresa tu correo electrónico"
              type="email"
              id="email"
              required
            />

            <button className="flex absolute inset-y-0 right-0 mt-2 mr-2 items-center w-10 h-10 bg-orange rounded-full hover:bg-orangeFull focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-500 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L10.586 11H4a1 1 0 010-2h6.586l-3.293-3.293a1 1 0 111.414-1.414l6 6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* flecha */}
        </div>
      </form>
    </div>
  );
};
export default Newslatter;
