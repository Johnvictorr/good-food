"use client"

import { useMemo, useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { foodItems, drinkItems, dessertItems } from "@/data/food"; 

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import Image from "next/image";

import { toast } from "sonner";

function phoneNumberFormatter(str: string) {
    return str.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

export default function FoodSelected() {
    const { addItem, items } = useCartStore();

    const [ price, setPrice ] = useState(0);
    const [ qtd, setQtd ] = useState(0);
    const [ total, setTotal ] = useState(0);

    const params = useParams();
    
    const id = params?.id;
    const idNumber = parseInt(params?.id as string, 10);

    const item = useMemo(() => {
        const allItems = [...foodItems, ...drinkItems, ...dessertItems];
        return allItems.find(food => food.id === idNumber);
      }, [idNumber]);

    useEffect(() => {
        if (item) {
          const initialQtd = 1;
          const delivery = 5;
      
          setPrice(item.price);
          setQtd(initialQtd);
          setTotal(item.price * initialQtd + delivery);
        }
      }, [item]);

    useEffect(() => {
        if (item) {
            const delivery = 5;
            setTotal(item.price * qtd + delivery);
        }
    }, [item, qtd]);

    const decrementQtd = () => {
        if (qtd > 1) {
            setQtd(prev => prev - 1);
        }
    };

     const incrementQtd = () => {
            setQtd(prev => prev + 1);
    };

    const handleAddToCart = () => {
        if (item) {
            console.log('adding to cart');
            let qtdItens = items.length
            addItem({
                idCart: qtdItens.toString(),
                idProduct: item.id.toString(),
                name: item.name,
                price: item.price,
                quantity: qtd,
                discription: "descrição mocada"
            });

            toast.success(`Item ${item.name} (${qtd}) added to cart`);
        }
    };

    const [phone, setPhone] = useState('');
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = phoneNumberFormatter(e.target.value);
        setPhone(value);
    };

    return (
        <div className="justify-center items-center flex flex-col md:flex-row w-full text-black p-4 gap-8">

            <div className="w-full md:w-1/3 justify-center flex flex-col">

                <h1 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-lg md:text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 text-shadow-base text-white">{item?.name}</h1>

                <div className="flex items-center justify-center">
                    <Image className="w-69 h-69 rounded-full" src={"/fotoComida.png"} alt="Imagem" width={300} height={300}/>
                </div>

                <div className="flex flex-col justify-center pt-3 gap-2">
                    <p className="text-sm md:text-lg opacity-60 font-bold text-center">Quantity:</p>
                    <div className="flex justify-center gap-1">
                        <button className="w-10 rounded-lg bg-red-600 text-white font-bold border-red-500 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 text-xl"
                        onClick={decrementQtd}>-</button>

                        <input
                        type="text"
                        value={qtd}
                        onChange={(e) => {
                            const value = e.target.value;
                            const numericValue = parseInt(value.replace(/\D/g, ''), 10);

                            if (!isNaN(numericValue) && numericValue >= 1) {
                            setQtd(numericValue);
                            } else {
                            setQtd(1);
                            }
                        }}
                        className="w-10 h-10 rounded-lg bg-gray-200 text-center"
                        />

                        <button className="w-10 rounded-lg bg-green-600 text-white font-bold border-green-500 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 text-xl"
                        onClick={incrementQtd}
                        >+</button>
                    </div>
                </div>

            </div>
            
            <div className="w-full md:w-1/3 justify-center flex flex-col">
                <h1 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-lg md:text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 text-shadow-base text-white">Informations</h1>

                <div className="flex flex-col text-xs md:text-sm bg-gray-200 p-5 rounded-lg mb-5 gap-5">
                    <h1>Product Value: <span className="font-bold">{`R$ ${item?.price}`}</span></h1>

                    <h1> Total: <span className="font-bold">{`R$ ${total.toFixed(2)}`}</span></h1>
                </div>

                <label htmlFor="observation">Description</label>
                <textarea className="flex flex-col h-27 resize-none text-xs md:text-sm bg-gray-200 p-2 rounded-lg mb-5 focus:outline-none"/>
                    
                <div className="flex flex-col w-full gap-4">
                    <input 
                        onClick={handleAddToCart}
                        type="button" 
                        value="Add to cart" 
                        className="bg-amber-400 text-white h-10 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
                    />
                    <Link href={"/"} >
                        <input 
                            type="button" 
                            value="Back to Home" 
                            className="w-full bg-gray-200 text-black h-10 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
                        />
                    </Link>
                </div>
            </div>
            
        </div>
    )
}