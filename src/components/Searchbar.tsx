import { ChangeEvent } from "react";

const Lens = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="dark:text-white w-8 pl-2 absolute top-4 left-4"
    viewBox="0 0 512 512"
  >
    <title>Search</title>
    <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
  </svg>
);

interface SearchbarProps {
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Searchbar = ({ onSearch, value }: SearchbarProps) => {
  return (
    <div className="w-96 shadow-md flex relative ">
      <Lens />
      <input
        value={value}
        placeholder="Search for a country..."
        className="w-96 p-4 pl-20 bg-very-light-gray dark:bg-dark-blue dark:text-white dark:placeholder:text-white"
        onChange={onSearch}
      />
    </div>
  );
};
