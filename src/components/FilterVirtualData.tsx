import { ChangeEvent, useMemo, useState } from "react";
import { Country } from "../types";
import { Searchbar } from "./Searchbar";
import { Select } from "./Select";
import { Virtual } from "./Virtual";

const continents = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

interface FilterVirtualDataProps {
  data: Country[];
}

export const FilterVirtualData = ({ data }: FilterVirtualDataProps) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (!filter.includes("name")) {
      setFilter((prev) => [...prev, "name"]);
    }

    setSearch(event.target.value);
  };

  const handleOptionClick = (option: string) => {
    if (!filter.includes("region")) {
      setFilter((prev) => [...prev, "region"]);
    }
    setOption(option);
  };

  const filteredData = useMemo(() => {
    if (filter.includes("region") && filter.includes("name")) {
      return data
        .filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(search.toLowerCase());
        })
        .filter((country) => {
          if (option === "All") return data;
          return country.region === option;
        });
    }
    if (filter.includes("name")) {
      return data.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filter.includes("region")) {
      return data.filter((country) => {
        if (option === "All" || !option) return data;
        return country.region === option;
      });
    }
    return data;
  }, [filter, search, option]);

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
      <Virtual data={filteredData} />
    </div>
  );
};
