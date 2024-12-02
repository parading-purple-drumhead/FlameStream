const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="flex items-center justify-between bg-transparent px-20 py-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 fill-orange-400"
          viewBox="0 0 24 24"
        >
          <path d="M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3"></path>
        </svg>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-8 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
