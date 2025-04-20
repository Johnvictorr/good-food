import Link from "next/link";


type Props = {
    id: number;
    name: string;
    price: number;
    icon: React.ReactNode;
}

const CardComida: React.FC<Props> = ({icon, name, price, id}) => {

    return(
        <Link href={`/foodSelected/${id}`}>
            <div className="text-black text-xs md:text-sm justify-between items-center flex border-1 border-gray-200 bg-gray-200 hover:bg-white transition duration-100 ease-in-out cursor-pointer p-4 rounded-xl">
                {icon}
                <p>{name}</p>
                <p>{`R$ ${price}`}</p>
            </div>
        </Link>

    )
}

export default CardComida