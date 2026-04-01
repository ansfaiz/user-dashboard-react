function Card({ name, img, address, cell }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-5 flex gap-4 border border-white/40 relative overflow-hidden">

      {/* Decorative Gradient Strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition"></div>

      <img
        src={img}
        alt={name}
        className="w-20 h-20 rounded-full border-2 border-white shadow-md"
      />

      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{address}</p>
        <p className="text-sm text-gray-400">📞 {cell}</p>

        <span className="inline-block mt-2 px-3 py-1 text-xs bg-green-200/70 text-green-700 rounded-full backdrop-blur">
          Active
        </span>
      </div>
    </div>
  );
}

export default Card;