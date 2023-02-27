import { useQuery } from "react-query";
import { getCountries } from "../api/api";

import { SkeletonContainer } from "../components/Skeleton";

import { FilterVirtualData } from "../components/FilterVirtualData";

export const FlagPreviewPage = () => {
  const { data, error, status } = useQuery(["countries"], getCountries);

  if (status === "loading") return <SkeletonContainer />;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (!data) return null;

  return <FilterVirtualData data={data} />;
};
