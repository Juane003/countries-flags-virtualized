import { Searchbar } from "../components/Searchbar";
import { Select } from "../components/Select";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { getCountries } from "../api/api";
import { FlagPreview } from "../components/FlagPreview";

const continents = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

// type langs = "pur" | "ars" | "eng";

// interface a {
//   langs: Partial<{ [key in langs]: string }>;
// }
// const b: a = {
//   langs: {
//     pur: "asd",
//   },
// };

import { Country } from "../types";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const FlagPreviewPage = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");

  const { data, error, status } = useQuery(["countries"], getCountries, {
    select: (data) => {
      if (!filter) return data;
      if (filter === "name") {
        return data.filter((country: Country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (filter === "region") {
        return data.filter((country: Country) => {
          if (option === "All" || !option) return data;
          return country.region === option;
        });
      }
    },
  });

  if (status === "loading") return <LoadingSpinner />;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter("name");
    setOption("");
    setSearch(event.target.value);
  };

  const handleOptionClick = (option: string) => {
    setFilter("region");
    setSearch("");
    setOption(option);
  };

  return (
    <div>
      <div className="m-5 flex flex-col  items-center sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center sm:m-20">
        <Searchbar
          value={search}
          onSearch={(event: ChangeEvent<HTMLInputElement>) =>
            handleOnSearch(event)
          }
        />
        <Select
          options={continents}
          onOptionClick={handleOptionClick}
          currentOption={option}
        />
      </div>
      <FlagPreview countries={data} />
    </div>
  );
};
