import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const windowSizeChanges = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener("resize", windowSizeChanges);
    return () => {
      window.removeEventListener("resize", windowSizeChanges);
    };
  }, []);
  return [windowSize];
};

export { useWindowSize };
