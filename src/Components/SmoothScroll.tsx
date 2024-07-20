import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export interface SmoothScrollProps {
  children: ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, 
        duration: 1.5, 
        easing: (t: number) => 1 - Math.pow(1 - t, 4), 
        infinite: false, 
        touchMultiplier: 2, 
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
