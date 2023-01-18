import { useMemo } from "react";
import { Link } from "react-router-dom";

import { Country } from "../types";

interface FlagCardPreviewProps {
  country: Country;
}

export const FlagCardPreview = ({ country }: FlagCardPreviewProps) => {
  const { name, flags, population, region, capital } = country;
  const linkPath = useMemo(
    () => name.common.toLowerCase().replace(" ", "-"),
    [name]
  );

  return (
    <Link to={`/${linkPath}`}>
      <div className="w-80 h-[400px] bg-very-light-gray shadow-md rounded-md z-10 dark:bg-dark-blue dark:text-white">
        <img src={flags.svg} className="w-80 h-56 rounded-t-md object-cover" />
        <h2 className="font-bold pt-8 pl-4 pb-4 text-xl ">{name.common}</h2>
        <div className="flex flex-col pl-4">
          <div>
            <span className="font-semibold">Population: </span>
            <span>{population}</span>
          </div>
          <div>
            <span className="font-semibold">Region: </span>
            <span>{region}</span>
          </div>
          <div>
            <span className="font-semibold">Capital: </span>
            {capital?.length &&
              capital.map((cap, index) => {
                if (index < capital.length - 1)
                  return <span key={cap}>{cap}, </span>;
                else return <span key={cap}>{cap}</span>;
              })}
          </div>
        </div>
      </div>
    </Link>
  );
};
