import { useAddressStore } from "@/store/addressStore";
import { useState } from "react";

type Props = {
  previousStep: () => void;
  nextStep: () => void;
};

function formatPhoneNumber(value: string) {
  const onlyNums = value.replace(/\D/g, "").slice(0, 11);
  if (onlyNums.length < 3) return onlyNums;
  if (onlyNums.length < 8) {
    return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2)}`;
  }
  return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 7)}-${onlyNums.slice(7)}`;
}

function formatCep(value: string) {
  const onlyNums = value.replace(/\D/g, "").slice(0, 8);
  if (onlyNums.length <= 5) return onlyNums;
  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5)}`;
}

export default function AddressStep({ previousStep, nextStep }: Props) {
  const { form, setForm } = useAddressStore();
  const [phone, setPhone] = useState(form.phone);
  const [cep, setCep] = useState(form.cep);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
    console.log("Address Submitted:", form);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    setForm({ phone: formatted });
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value);
    setCep(formatted);
    setForm({ cep: formatted });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-800">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Customer Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.name}
          onChange={handleChange}
          minLength={3}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input
          name="phone"
          type="text"
          placeholder="(00) 00000-0000"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={phone}
          onChange={handlePhoneChange}
          minLength={15}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="endereco" className="text-sm font-medium">
          Address
        </label>
        <input
          name="endereco"
          type="text"
          placeholder="Your Address"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.endereco}
          onChange={handleChange}
          minLength={4}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:cursor-pointer text-white rounded-md py-2 px-4 text-sm font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
      >
        Confirm Address
      </button>

      <button
        type="button"
        onClick={previousStep}
        className="bg-gray-200 hover:cursor-pointer text-black rounded-md py-2 px-4 text-sm font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
      >
        Back
      </button>
    </form>
  );
}