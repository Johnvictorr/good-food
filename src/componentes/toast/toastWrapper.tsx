"use client";

import { useEffect, useState } from "react";
import { Toaster } from "@/shadcn/ui/sonner"

export default function ToastWrapper() {
    const [position, setPosition] = useState<"top-center" | "bottom-center">("top-center");
    
    useEffect(() => {
        const width = window.innerWidth;
      
        if (width < 640) {
          setPosition("bottom-center");
        } else {
          setPosition("top-center");
        }
      }, []);

    return(
        <Toaster  position={position}	 visibleToasts={1} duration={1500}/>
    )
}