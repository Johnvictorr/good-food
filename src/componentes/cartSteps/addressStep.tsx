import { useCartStore } from "@/store/cartStore";
import { useAddressStore } from "@/store/addressStore";
import { useState } from "react";

type Props = {
  previousStep: () => void;
  nextStep: () => void;
};

export default function AddressStep({ previousStep, nextStep }: Props) {
    const { form, setForm } = useAddressStore();
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Endereço enviado:", form);
    };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-800">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Nome do cliente:
        </label>
        <input
          name="name"
          type="text"
          placeholder="Nome completo"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Telefone:
        </label>
        <input
          name="phone"
          type="text"
          placeholder="(00) 00000-0000"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="endereco" className="text-sm font-medium">
          Endereço:
        </label>
        <input
          name="endereco"
          type="text"
          placeholder="Rua, número, bairro"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.endereco}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cep" className="text-sm font-medium">
          CEP:
        </label>
        <input
          name="cep"
          type="text"
          placeholder="00000-000"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.cep}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 px-4 text-sm font-medium transition"
        onClick={nextStep}
      >
        Confirmar Endereço
      </button>

      <button
        type="button"
        onClick={previousStep}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md py-2 px-4 text-sm font-medium transition"
      >
        Voltar
      </button>
    </form>
  );
}