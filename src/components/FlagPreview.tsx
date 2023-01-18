import { Country } from "../types";
import { FlagCardPreview } from "./FlagCardPreview";

interface FlagPreviewProps {
  countries: Country[];
}

export const FlagPreview = ({ countries }: FlagPreviewProps) => {
  const renderFlags = (country: Country) => (
    <FlagCardPreview country={country} key={country.name.common} />
  );
  return (
    <div className="grid grid-cols-1 justify-items-center w-full gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries.map(renderFlags)}
    </div>
  );
};
