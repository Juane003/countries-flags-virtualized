import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { toggleDarkMode };
};

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="dark:text-white h-4 mt-0.5"
    viewBox="0 0 512 512"
  >
    <title>Moon</title>
    <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" />
  </svg>
);

export const Header = () => {
  const { toggleDarkMode } = useDarkMode();
  return (
    <header className="w-full h-20 px-5 sm:px-20 bg-very-light-gray shadow-md flex justify-between items-center dark:bg-dark-blue dark:text-white">
      <h1 className="text-l font-bold sm:text-2xl">Where in the World?</h1>
      <div className="flex items-center ">
        <button onClick={toggleDarkMode}>
          <Moon />
        </button>
        <span className="text-m ml-2 sm:text-lg">Dark Mode</span>
      </div>
    </header>
  );
};
