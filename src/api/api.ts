import { Country } from "../types";

export const getCountries = async (): Promise<Country[]> => {
  return await fetch(`${import.meta.env.VITE_API_URL}all`).then((response) =>
    response.json()
  );
};

export const getCountry = async (id: string) => {
  return await fetch(`${import.meta.env.VITE_API_URL}name/${id}`).then(
    (response) => response.json()
  );
};
