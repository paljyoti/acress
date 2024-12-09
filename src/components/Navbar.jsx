import { IoMdPerson } from "react-icons/io";

function Navbar() {
  return (
    <div>
      <div className="nav flex justify-between items-center px-4 py-3 bg-white shadow-md">
        {/* Left-side Navigation Links */}
        <div className="text-red-400 font-bold flex gap-4">
          <a href="" className="hover:text-red-600">Resale</a>
          <a href="" className="hover:text-red-600">Rental</a>
          <a href="" className="hover:text-red-600">List Property</a>
          <a href="" className="hover:text-red-600">Projects</a>
        </div>

        {/* Right-side Buttons and Icon */}
        <div className="profile flex items-center gap-4">
          <a href="" className="hidden md:block text-red-400 hover:text-red-600">
            List Property
          </a>

          <button
            type="button"
            className="focus:outline-none text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Red
          </button>

          <h6 className="text-red-400 text-lg">
            <IoMdPerson />
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
