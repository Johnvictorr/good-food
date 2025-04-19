import { FiX } from "react-icons/fi";

type Props = {
    name: string;
    price: number;
    quantity: number;
    onRemove: () => void;
  };
  
  export default function CardItemCart({ name, price, quantity, onRemove }: Props) {
    const total = price * quantity;
  
    return (
      <div className="border rounded-md p-4 mb-3 shadow-sm bg-white">
        <div className="flex justify-end mb-2">
          <button
            onClick={onRemove}
            className="text-gray-400 hover:text-red-500 transition"
            aria-label="Remover item"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">Qtd: {quantity}</p>
          </div>
    
          <div className="text-right">
            <p className="text-sm text-gray-600">R$ {price.toFixed(2)}</p>
            <p className="text-base font-bold text-green-600">R$ {total.toFixed(2)}</p>
          </div>
        </div>
      </div>

    );
  }