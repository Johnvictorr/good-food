import { motion } from "framer-motion";

type Props = {
  step: number;
  currentStep: number;
  direction: "forward" | "backward";
  animate: boolean;
  children: React.ReactNode;
};

export function StepWrapper({ step, currentStep, direction, animate, children }: Props) {
  if (step !== currentStep) return null;

  const variants = {
    initial: { opacity: 0, x: direction === "forward" ? 100 : -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction === "forward" ? -100 : 100 },
  };

  return (
    <motion.div
      key={`step-${step}`}
      initial={animate ? "initial" : false}
      animate={animate ? "animate" : false}
      {...(animate && { exit: "exit" })}
      variants={variants}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}