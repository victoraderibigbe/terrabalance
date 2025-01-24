import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityButton = () => {
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-full px-5 h-16 w-full max-w-56">
      <button id="decrement" className="text-gray-500">
        <FaMinus />
      </button>
      <input
        type="number"
        id="quantity"
        value="1"
        min="1"
        readOnly
        className="w-5 md:w-14 p-0 border-none text-gray-500 focus:ring-0 bg-transparent text-center font-semibold text-lg"
      />
      <button id="increment" className="text-gray-500">
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
