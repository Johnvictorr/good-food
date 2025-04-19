"use client"

import { useMemo, useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { foodItems, drinkItems, dessertItems } from "@/data/food"; 

import { useCartStore } from "@/store/cartStore";

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
        }
    };

    const [phone, setPhone] = useState('');
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = phoneNumberFormatter(e.target.value);
        setPhone(value);
    };

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 text-black p-4 gap-5">

            <div className="w-full p-2 justify-center flex flex-col">

                <h1 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-lg md:text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 text-shadow-lg text-white">Select quantity</h1>

                <div className="w-full h-60 md:h-88">
                    <img className="w-full h-full rounded-lg" src="https://img.freepik.com/fotos-gratis/um-delicioso-hamburguer-no-estudio_23-2151846493.jpg?ga=GA1.1.663066825.1744765198&semt=ais_hybrid&w=740" alt="" />
                </div>

                <div className="flex justify-center pt-2 gap-1">
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
            
            <div className="w-full p-2 justify-center flex flex-col">

                <h1 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-md md:text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 text-shadow-lg text-white">Client Information</h1>
                <div className="flex flex-col">

                    <label htmlFor="name">Client Name</label>
                    <input 
                        type="text"
                        className="bg-gray-200 w-full h-10 rounded-lg p-2 focus:outline-none"
                    />

                    <label htmlFor="phone">Client Phone</label>
                    <input 
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        minLength={14}
                        maxLength={14}
                        className="bg-gray-200 w-full h-10 rounded-lg p-2 focus:outline-none"
                    />

                    <label htmlFor="address">Client Address</label>
                    <input 
                        type="text"
                        placeholder="Street - Number"
                        className="bg-gray-200 w-full h-10 rounded-lg p-2 focus:outline-none"
                    />

                    <label htmlFor="complement">Complement</label>
                    <input 
                        type="text"
                        className="bg-gray-200 w-full h-10 rounded-lg p-2 mb-2 focus:outline-none"
                    />

                    <textarea 
                        placeholder="Observations"
                        className="bg-gray-200 h-36 rounded-lg p-3 focus:outline-none overflow-hidden"
                    />

                </div>
                
            </div>
            <div className="w-full p-2 justify-center flex flex-col">
                <h1 className="flex items-center bg-red-600 w-auto mb-4 p-2 justify-center rounded-t-full text-lg md:text-2xl font-bold transition-transform duration-300 ease-in-out hover:-translate-y-2 text-shadow-lg text-white">Total Price</h1>

                <div className="flex flex-col text-xs md:text-lg gap-2 bg-gray-200 p-4 rounded-lg mb-5">
                    <h1>Product Value: <span className="font-bold">{`R$ ${item?.price}`}</span></h1>
                    <h1>Delivery Value: <span className="font-bold">R$ 5,00</span></h1>
                    <h1 className="mb-7">Additional: R$ <span className="font-bold">0,00</span></h1>

                    <h1 className="font-bold mb-5">Total: R$ {`${total}`}</h1>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <input 
                        onClick={handleAddToCart}
                        type="button" 
                        value="Add to cart" 
                        className="bg-amber-400 text-white font-bold h-10 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
                    />
                    <input 
                        type="button" 
                        value="Checkout" 
                        className="bg-green-600 text-white font-bold h-10 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
                    />
                    <input 
                        type="button" 
                        value="Cancel" 
                        className="bg-red-600 text-white font-bold h-10 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
                    />
                </div>
            </div>
            
        </div>
    )
}