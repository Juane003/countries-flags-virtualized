import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getCountry } from "../api/api";
import { LoadingSpinner } from "../components/LoadingSpinner";

interface FlagParams {
  id: string;
}

export const FlagDetails = () => {
  const { id } = useParams() as unknown as FlagParams;
  const deserializedId = id?.replace("-", " ");
  const { data, status, isFetching } = useQuery(
    ["country", deserializedId],
    () => getCountry(deserializedId)
  );

  if (status === "loading" || isFetching) return <LoadingSpinner />;

  const {
    name,
    flags,
    population,
    region,
    capital,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = data[0];

  const nativeNameKey = Object.keys(name.nativeName);
  const currenciesKey = Object.keys(currencies);
  const languagesKey = Object.keys(languages);

  const currenciesList = currenciesKey.map((key, index) => {
    if (index === currenciesKey.length - 1) return `${currencies[key].name} `;
    else return `${currencies[key].name}, `;
  });
  const languagesList = languagesKey.map((key, index) => {
    if (index === languagesKey.length - 1) return `${languages[key]} `;
    else return `${languages[key]}, `;
  });

  const renderBorders = (country: string) => {
    return (
      <span className=" w-20 sm:w-32 px-4 py-1 bg-very-light-gray text-center shadow-md border-2 dark:bg-dark-blue dark:border-dark-blue">
        {country}
      </span>
    );
  };

  return (
    <div className="w-full p-20 dark:text-white">
      <button className="bg-very-light-gray shadow-md py-2 w-40 dark:bg-dark-blue">
        <Link to="/" className="text-lg flex items-center justify-center gap-2">
          <span className="font-bold text-2xl ">↤</span>
          Back
        </Link>
      </button>
      <div className="flex flex-col pt-20 justify-between sm:flex-col md:flex-col lg:flex-row">
        <img
          src={flags.svg}
          className="w-[600px] h-[300px] sm:h-[500px] sm:w-[800px] object-fill"
        />
        <div className=" flex flex-col">
          <h1 className="font-bold text-5xl pt-10">{name.common}</h1>
          <div className=" flex gap-[20px] flex-col sm:flex-row sm:gap-[200px]">
            <div className="flex flex-col pt-10 gap-2">
              <StyledSpan
                text="Native Name: "
                data={name.nativeName[nativeNameKey[0]].common}
              />
              <StyledSpan text="Population: " data={population} />
              <StyledSpan text="Region: " data={region} />
              <StyledSpan text="Sub Region: " data={subregion} />
              <StyledSpan text="Capital: " data={capital} />
            </div>
            <div className="flex flex-col pt-10 gap-2">
              <StyledSpan text="Top Level Domain: " data={tld[0]} />
              <StyledSpan text="Currencies: " data={currenciesList} />
              <StyledSpan text="Languages: " data={languagesList} />
            </div>
          </div>
          {borders?.length && (
            <div className="pt-20 flex gap-4 items-center flex-col sm:flex-row">
              <span className="font-semibold">Border Countries: </span>
              <div className="grid grid-cols-3 gap-2">
                {borders.map(renderBorders)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface StyledSpanProps {
  text: string;
  data: string | string[];
}

const StyledSpan = ({ text, data }: StyledSpanProps) => {
  return (
    <div>
      <span className="font-semibold">{text}</span>
      <span>{data}</span>
    </div>
  );
};
