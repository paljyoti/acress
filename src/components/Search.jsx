
import Image1 from "../../src/assets/img-02.jpg";

function Search() {
  return (
    <div>
      <div className="img">
        <img src={Image1} className="w-full" alt="" />
      </div>

      <form className="max-w-lg mx-auto">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-red-900 bg-red-50 rounded-e-lg border-s-red-400 border-s-2 border border-red-400 focus:ring-red-400 focus:border-red-400  dark:red-s-gray-700  dark:border-red-600  dark:text-white dark:focus:border-red-400"
              placeholder=""
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-red-400 rounded-e-lg border border-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-400 dark:bg-blue-600 dark:hover:bg-red-400 dark:focus:ring-red-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
