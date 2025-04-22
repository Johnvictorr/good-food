// ICONES
import { PiHamburger, PiPizza, PiIceCream, PiBeerBottle} from "react-icons/pi";
import { LuCupSoda, LuDonut, LuIceCreamBowl } from "react-icons/lu";
import { CiHotdog, CiFries } from "react-icons/ci";
import { BsCupStraw } from "react-icons/bs";
import { TbBottle } from "react-icons/tb";
  
  // COMPONENTES
  import CardComida from "../card/cardComida";
  
  type Props = {
    name: string;
    data: Array<{
        id: number;
        name: string;
        price: number;
        icon: string; // ex: "PiHamburger"
    }>;
  };
  
  // Mapa de ícones disponíveis
  const IconMap: Record<string, React.ElementType> = {
    PiHamburger,
    PiPizza,
    PiIceCream,
    PiBeerBottle,
    LuCupSoda,
    LuDonut,
    LuIceCreamBowl,
    CiHotdog,
    CiFries,
    BsCupStraw,
    TbBottle
  };
  
  export default function ListaComidas({ name, data }: Props) {
    return (
      <section className="rounded-xl p-4">
        <h2 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          {name}
        </h2>
        <div className="grid grid-cols-1 gap-2">
          {data.map((item, index) => {
            const IconComponent = IconMap[item.icon];
            return (
              <CardComida
                key={index}
                id={item.id}
                icon={
                  IconComponent && (
                    <IconComponent className="w-10 h-10 bg-red-600 text-amber-400 p-1 rounded-full" />
                  )
                }
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </section>
    );
  }