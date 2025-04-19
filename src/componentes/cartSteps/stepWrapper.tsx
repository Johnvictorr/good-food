import { motion } from "framer-motion";

type Props = {
    step: number;
    currentStep: number;
    children: React.ReactNode;
  };
  
  export function StepWrapper({ step, currentStep, children }: Props) {
    if (step !== currentStep) return null;
  
    return (
        <motion.div
          key="step"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      );
  }