import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", onResize, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
};
