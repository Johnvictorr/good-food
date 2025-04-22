import { useCartStore } from "@/store/cartStore";
import { useAddressStore } from "@/store/addressStore";
import { TiShoppingCart } from "react-icons/ti";

type Props = {
  onFinish: () => void;
  previousStep: () => void;
};

export default function ConfirmStep({ onFinish, previousStep }: Props) {
  const { items, clearCart } = useCartStore();
  const { form } = useAddressStore();

  const deliveryFee = 5;
  const total = items.reduce((acc, item) => acc + item.price * item.quantity + deliveryFee, 0);

  const handleConfirm = () => {
    const pedido = {
      endereco: form,
      produtos: items,
      total,
    };

    const produtos = items
    .map(
      (item) =>
        `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n  ${item.discription || ""}`
    )
    .join("\n\n");
  
  const mensagem = `
  🛒 *New Order*
  
  📍 *Delivery Address:*
  Name: ${form.name}
  Phone: ${form.phone}
  Adress: ${form.endereco}
  
  📦 *Product Order:*
  ${produtos}
  
  💵 *Delivery Fee:* R$ ${deliveryFee.toFixed(2)}
  
  💰 *Total:* R$ ${total.toFixed(2)}
  
  ✅ Send order to App
  `.trim();

    console.log("Finishing order:", pedido);
    const numeroRestaurante = "5583986230880";
    const url = `https://wa.me/${numeroRestaurante}?text=${encodeURIComponent(mensagem)}`;

    clearCart();
    onFinish();

    window.open(url, "_blank"); 
  };

  return (
    <div className="flex flex-col gap-4 text-gray-800">
      <h2 className="text-lg font-semibold">📍 Delivery Address</h2>
      <div className="text-sm border rounded-md p-3 bg-gray-50">
        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>Phone:</strong> {form.phone}</p>
        <p><strong>Address:</strong> {form.endereco}</p>
      </div>

      <h2 className="text-lg font-semibold mt-4">🧾 Order Items</h2>
      {items.length === 0 ? (
        <div className="flex justify-center py-6">
          <TiShoppingCart size={80} className="text-gray-300" />
          <p className="text-muted-foreground">Empty Cart.</p>
        </div>
      ) : (
        <div className="border rounded-md p-2 bg-gray-50 max-h-[15vh] overflow-y-auto text-xs space-y-1">
          {items.map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{item.quantity}x {item.name}</span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-2 text-sm font-semibold">
        <span>Delivery Fee:</span>
        <span className="text-green-600">R$ {deliveryFee.toFixed(2)}</span>
      </div>

      <div className="flex justify-between items-center mt-2 text-sm font-semibold border-t pt-2">
        <span>Total:</span>
        <span className="text-green-600">R$ {total.toFixed(2)}</span>
      </div>

      <button
        type="submit"
        className="bg-red-600 hover:cursor-pointer text-white rounded-md py-2 px-4 text-sm font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
        onClick={handleConfirm}
      >
        Finish Order
      </button>

      <button
        type="button"
        onClick={previousStep}
        className="bg-gray-200 hover:cursor-pointer text-black rounded-md py-2 px-4 text-sm font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
      >
        Back
      </button>
    </div>
  );
}