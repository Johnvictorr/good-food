// /componentes/modal/modalCart.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/ui/dialog";

type Props = {
  isOpen: boolean;
  onCLose: () => void;
};

export default function ModalCart({ isOpen, onCLose }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCLose()}>
      <DialogContent className="w-96">
        <DialogHeader className="text-gray-600">
          <DialogTitle>Carrinho</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground">Seu carrinho está vazio.</p>
      </DialogContent>
    </Dialog>
  );
}