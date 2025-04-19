type Props = {
    name: string;
    price: number;
    quantity: number;
  };
  
  export default function CardItemCart({ name, price, quantity }: Props) {
    const total = price * quantity;
  
    return (
      <div className="flex justify-between items-center border rounded-md p-4 mb-3 shadow-sm bg-white">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">Qtd: {quantity}</p>
        </div>
  
        <div className="text-right">
          <p className="text-sm text-gray-600">R$ {price.toFixed(2)}</p>
          <p className="text-base font-bold text-green-600">R$ {total.toFixed(2)}</p>
        </div>
      </div>
    );
  }