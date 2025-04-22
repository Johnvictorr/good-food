import { create } from "zustand";

type AddressData = {
  name: string;
  phone: string;
  endereco: string;
};

type AddressStore = {
  form: AddressData;
  setForm: (data: Partial<AddressData>) => void;
  resetForm: () => void;
};

export const useAddressStore = create<AddressStore>((set) => ({
  form: {
    name: "",
    phone: "",
    endereco: "",
  },
  setForm: (data) =>
    set((state) => ({
      form: { ...state.form, ...data },
    })),
  resetForm: () =>
    set({
      form: {
        name: "",
        phone: "",
        endereco: "",
      },
    }),
}));