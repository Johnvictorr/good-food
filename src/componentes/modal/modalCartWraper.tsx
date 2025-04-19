"use client";

import { useModalCartStore } from "@/store/modalCartStore";
import ModalCart from "./modalCart";

export default function ModalCartWrapper() {
  const { isOpen, closeModal } = useModalCartStore();

  return <ModalCart isOpen={isOpen} onCLose={closeModal} />;
}