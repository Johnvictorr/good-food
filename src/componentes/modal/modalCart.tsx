"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/ui/dialog";

import { useState } from "react";
import CartStep from "../cartSteps/cartStep";
import AddressStep from "../cartSteps/addressStep";
import ConfirmStep from "../cartSteps/confirmStep";
import { StepWrapper } from "../cartSteps/stepWrapper";

type Props = {
  isOpen: boolean;
  onCLose: () => void;
};

export default function ModalCart({ isOpen, onCLose }: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const previousStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCLose()}>
      <DialogContent className="w-96 max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="text-gray-600">
          <DialogTitle>Carrinho</DialogTitle>
        </DialogHeader>

        <StepWrapper step={0} currentStep={currentStep}>
          <CartStep nextStep={nextStep} />
        </StepWrapper>

        <StepWrapper step={1} currentStep={currentStep}>
          <AddressStep nextStep={nextStep} previousStep={previousStep} />
        </StepWrapper>

        <StepWrapper step={2} currentStep={currentStep}>
          <ConfirmStep previousStep={previousStep} onFinish={onCLose} />
        </StepWrapper>

      </DialogContent>
    </Dialog>
  );
}