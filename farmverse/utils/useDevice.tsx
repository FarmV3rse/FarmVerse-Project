import { useEffect, useState } from "react";

export function useDevice() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDevice("mobile"); // Mobile (< 768px)
      } else if (width >= 768 && width <= 1024) {
        setDevice("tablet"); // Tablet (768px - 1024px)
      } else {
        setDevice("desktop"); // Desktop (> 1024px)
      }
    };

    updateDevice(); // Initial check
    window.addEventListener("resize", updateDevice);

    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return {
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
}
