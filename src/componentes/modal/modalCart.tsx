"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/ui/dialog";

import { useState, useEffect } from "react";
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
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const nextStep = () => {
    setDirection("forward");
    setHasInteracted(true);
    setCurrentStep((prev) => prev + 1);
  };
  
  const previousStep = () => {
    setDirection("backward");
    setHasInteracted(true);
    setCurrentStep((prev) => prev - 1);
  };

    useEffect(() => {
      if (isOpen) {
        setHasInteracted(false);
        setCurrentStep(0);
      }
    }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCLose()}>
      <DialogContent className="w-96 max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="text-gray-600">
          <DialogTitle>Cart</DialogTitle>
        </DialogHeader>

        <StepWrapper step={0} currentStep={currentStep} direction={direction} animate={hasInteracted}>
          <CartStep nextStep={nextStep} />
        </StepWrapper>

        <StepWrapper step={1} currentStep={currentStep} direction={direction} animate={hasInteracted}>
          <AddressStep nextStep={nextStep} previousStep={previousStep} />
        </StepWrapper>

        <StepWrapper step={2} currentStep={currentStep} direction={direction} animate={hasInteracted}>
          <ConfirmStep previousStep={previousStep} onFinish={onCLose} />
        </StepWrapper>

      </DialogContent>
    </Dialog>
  );
}