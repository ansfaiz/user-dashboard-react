function NameButton({ name, id, selectedIds, onSelect }) {
  const isSelected = selectedIds.includes(id);

  return (
    <button
      onClick={() => onSelect(id)}
      className={`w-full px-4 py-3 rounded-xl flex justify-between items-center transition-all duration-300 ease-in-out group
          ${isSelected
          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl scale-[1.04]"
          : "bg-white/60 backdrop-blur-md hover:bg-white hover:shadow-md hover:scale-[1.02]"
        }`}
    >
      <span className="font-medium group-hover:translate-x-1 transition">
        {name}
      </span>

      <span className="text-xs font-semibold">
        {isSelected ? "✓ Selected" : "+"}
      </span>
    </button>
  );
}

export default NameButton;