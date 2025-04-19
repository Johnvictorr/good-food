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

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirm = () => {
    const pedido = {
      endereco: form,
      produtos: items,
      total,
    };

    const produtos = items
    .map(
      (item) =>
        `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`
    )
    .join("\n");

    const mensagem = `
    🛒 *Novo Pedido*
    
    📍 *Endereço de entrega:*
    Nome: ${form.name}
    Telefone: ${form.phone}
    Endereço: ${form.endereco}
    CEP: ${form.cep}
    
    📦 *Itens do Pedido:*
    ${produtos}
    
    💰 *Total:* R$ ${total.toFixed(2)}
    
    ✅ Enviado via App
        `.trim();

    console.log("Pedido finalizado:", pedido);
    const numeroRestaurante = "5583986230880";
    const url = `https://wa.me/${numeroRestaurante}?text=${encodeURIComponent(mensagem)}`;

    clearCart();
    onFinish();

    window.open(url, "_blank"); 
  };

  return (
    <div className="flex flex-col gap-4 text-gray-800">
      <h2 className="text-lg font-semibold">📍 Endereço de Entrega</h2>
      <div className="text-sm border rounded-md p-3 bg-gray-50">
        <p><strong>Nome:</strong> {form.name}</p>
        <p><strong>Telefone:</strong> {form.phone}</p>
        <p><strong>Endereço:</strong> {form.endereco}</p>
        <p><strong>CEP:</strong> {form.cep}</p>
      </div>

      <h2 className="text-lg font-semibold mt-4">🧾 Itens do Pedido</h2>
      {items.length === 0 ? (
        <div className="flex justify-center py-6">
          <TiShoppingCart size={80} className="text-gray-300" />
          <p className="text-muted-foreground">Carrinho vazio.</p>
        </div>
      ) : (
        <div className="border rounded-md p-3 bg-gray-50 max-h-40 overflow-y-auto text-sm space-y-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{item.quantity}x {item.name}</span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-2 text-sm font-semibold border-t pt-2">
        <span>Total:</span>
        <span className="text-green-700">R$ {total.toFixed(2)}</span>
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 px-4 text-sm font-medium transition"
        onClick={handleConfirm}
      >
        Confirmar Pedido
      </button>

      <button
        type="button"
        onClick={previousStep}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md py-2 px-4 text-sm font-medium transition"
      >
        Voltar
      </button>
    </div>
  );
}