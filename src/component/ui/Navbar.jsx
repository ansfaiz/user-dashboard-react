function Navbar({ onRefresh }) {
  return (
    <div className="backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-lg px-6 py-4 flex justify-between items-center sticky top-0 z-10">

      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        User Dashboard
      </h1>

      <button
        onClick={onRefresh}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200">
        🔄 Refresh
      </button>

    </div>
  );
}

export default Navbar;