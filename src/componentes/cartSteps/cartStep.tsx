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
          <div className="max-h-[50vh] overflow-y-auto">
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

          <div className="flex flex-col justify-between text-sm text-black">
            <span>Total Products: <span className="font-semibold">R$ {total.toFixed(2)}</span></span>
          </div>

          <button
            className="bg-green-600 hover:cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 text-white rounded-md py-2 px-4 text-sm transition"
            onClick={nextStep}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}