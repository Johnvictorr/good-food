import { create } from "zustand";

type ModalCartStore = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModalCartStore = create<ModalCartStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));