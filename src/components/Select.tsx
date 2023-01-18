import { useState } from "react";

interface SelectProps {
  options: string[];
  onOptionClick: (option: string) => void;
  currentOption: string;
}
export const Select = ({
  options,
  onOptionClick,
  currentOption,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const renderOptions = (option: string) => (
    <span
      className="cursor-pointer hover:font-semibold dark:hover:text-gray-400 dark:hover:font-semibold "
      onClick={() => onOptionClick(option)}
      key={option}
    >
      {option}
    </span>
  );

  const handleToggle = () => setIsOpen((previous) => !previous);

  return (
    <div
      onClick={handleToggle}
      className="bg-very-light-gray pt-4 w-40 h-14 text-center shadow-md z-20 dark:bg-dark-blue dark:text-white cursor-pointer"
    >
      <span>{!currentOption ? "Filter by Region" : currentOption}</span>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } flex flex-col mt-6 bg-very-light-gray w-40 shadow-md text-start pl-4 gap-2 pt-2 pb-2  dark:bg-dark-blue `}
      >
        {options.map(renderOptions)}
      </div>
    </div>
  );
};
