import CardItemCart from "../card/cardItemCart";
import { useCartStore } from "@/store/cartStore";

type Props = {
  nextStep: () => void;
};

export default function CartStep({ nextStep }: Props) {
  const { items, removeItem } = useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-4">
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your Cart is Empty.</p>
      ) : (
        <>
          <div className="max-h-[50vh] overflow-y-auto pr-2">
            {items.map((item, index) => (
              <CardItemCart
                key={index}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onRemove={ () => removeItem(item.idCart)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 justify-between text-sm text-black">
            <span>Delivery Fee: <span className="font-semibold">R$ 5,00</span></span>

            <span>Total: <span className="font-semibold">R$ {total.toFixed(2)}</span></span>
          </div>

          <button
            className="bg-red-600 hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 text-white rounded-md py-2 px-4 text-sm transition"
            onClick={nextStep}
          >
            Finish Order
          </button>
        </>
      )}
    </div>
  );
}