"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/ui/dialog";

import { useCartStore } from "@/store/cartStore";

import CardItemCart from "../card/cardItemCart";
import { TiShoppingCart } from "react-icons/ti";

type Props = {
  isOpen: boolean;
  onCLose: () => void;
};

export default function ModalCart({ isOpen, onCLose }: Props) {
  const { items, removeItem, clearCart } = useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const finalizarPedido = () => {
    clearCart();
    onCLose();

    console.log("pedido finalizado");
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCLose()}>
      <DialogContent className="w-96 max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="text-gray-600">
          <DialogTitle>Carrinho</DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <p className="text-muted-foreground">Seu carrinho está vazio.</p>
        ) : (
          <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2 flex-grow">
            {items.map((item, index) => (
              <CardItemCart
                key={index}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onRemove={() => removeItem(item.idCart)}
              />
            ))}
          </div>
        )}

        <DialogFooter>
          {items.length === 0 ? (
            <div className="w-full flex justify-center pt-4">
              <TiShoppingCart size={100} className="text-gray-300" />
            </div>
          
          ) : (
            <div className="w-full flex flex-col gap-2 border-t pt-4">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Total:</span>
                <span className="font-semibold">R$ {total.toFixed(2)}</span>
              </div>
              <button
                className="bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4 text-sm transition"
                onClick={finalizarPedido}
              >
                Finalizar Pedido
              </button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}