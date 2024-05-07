import logo from "../assets/elits.svg";

function Nav() {
  return (
    <nav className="bg-gradient-to-b from-[#CA8A2D] to-transparent backdrop-blur-6 px-12">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
        <img className="w-16 p-2 cursor-pointer" src={logo} alt="ELITS"></img>
        <div className="flex items-center"></div>
        <ul className="text-white font-bold flex gap-8 cursor-pointer py-4 uppercase">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>Shop</li>
          <li>
            <a className="px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              About dev
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
