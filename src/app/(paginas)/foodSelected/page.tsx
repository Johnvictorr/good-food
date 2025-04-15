"use client"

import { useState } from "react";

function onlyNumbers(str: string) {
    return str.replace(/[^0-9]/g, '');
}

function phoneNumberFormatter(str: string) {
    return str.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

export default function FoodSelected() {

    const [quantity, setQuantity] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = onlyNumbers(e.target.value);
        setQuantity(value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = phoneNumberFormatter(e.target.value);
        setPhone(value);
    };

    return (
        <div className="h-screen w-full grid grid-cols-1 md:grid-cols-3 text-black p-7 gap-2">

            <div className="w-full px-15 py-5 justify-center flex flex-col">

                <h1 className="text-center text-sm md:text-2xl font-bold mb-5">Select quantity</h1>

                <div className="border-2 border-red-600 w-full h-80 rounded-lg"></div>

                <div className="flex justify-center pt-10">
                    <button className="w-10 rounded-l-lg border-3 border-black font-bold border-red-500">-</button>
                    <input 
                        placeholder="0"
                        type="text"
                        value={quantity}
                        onChange={handleChange}
                        className="w-20 py-1 text-center border-y-1 border-black focus:outline-none"
                    />
                    <button className="w-10 rounded-r-lg border-3 border-black font-bold border-green-500">+</button>
                </div>

            </div>
            
            <div className="border-1 border-black w-full px-15 justify-center flex flex-col">

                <h1 className="text-center text-sm md:text-2xl font-bold mb-5 border-b-1 border-black">Client Information</h1>
                <div className="flex flex-col">

                    <label htmlFor="name">Client Name</label>
                    <input 
                        type="text"
                        className="border-2 border-red-600 w-full h-10 rounded-lg p-2 focus:outline-none"
                    />

                    <label htmlFor="phone">Client Phone</label>
                    <input 
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        minLength={14}
                        maxLength={14}
                        className="border-2 border-red-600 w-full h-10 rounded-lg p-2 focus:outline-none"
                    />

                    <label htmlFor="address">Client Address</label>
                    <input 
                        type="text"
                        placeholder="Street - Number"
                        className="border-2 border-red-600 w-full h-10 rounded-lg p-2 focus:outline-none"
                    />

                    <label htmlFor="complement">Complement</label>
                    <input 
                        type="text"
                        className="border-2 border-red-600 w-full h-10 rounded-lg p-2 mb-2 focus:outline-none"
                    />

                    <textarea 
                        placeholder="Observations"
                        className="border-2 border-red-600 h-32 rounded-lg p-3 focus:outline-none overflow-hidden"
                    />

                </div>
                
            </div>
            <div className="border-1 border-black w-full px-15 justify-center flex flex-col">
                <h1 className="text-center text-sm md:text-2xl font-bold mb-5 border-b-1 border-black">Total Price</h1>

                <div className="flex flex-col text-xl gap-2">
                    <h1>Product Value: <span className="font-bold">R$ 29,90</span></h1>
                    <h1>Delivery Value: <span className="font-bold">R$ 5,00</span></h1>
                    <h1 className="mb-7">Additional: R$ <span className="font-bold">0,00</span></h1>

                    <h1 className="font-bold mb-5">Total: R$ 34,90</h1>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <input 
                        type="button" 
                        value="Checkout" 
                        className="border-2 h-10 border-red-600 rounded-lg cursor-pointer"
                    />
                    <input 
                        type="button" 
                        value="Add to cart" 
                        className="border-2 h-10 border-red-600 rounded-lg cursor-pointer"
                    />
                    <input 
                        type="button" 
                        value="Cancel" 
                        className="border-2 h-10 border-red-600 rounded-lg cursor-pointer"
                    />
                </div>
            </div>

        </div>
    )
}