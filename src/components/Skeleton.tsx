export const SkeletonCard = () => {
  return (
    <div className="w-80 h-[400px] bg-very-light-gray shadow-md rounded-md z-10 dark:bg-dark-blue dark:text-white">
      <div className="w-80 h-56 rounded-t-md bg-stone-300 dark:bg-slate-900 animate-pulse"></div>
      <h2 className="w-64 dark:bg-slate-900 h-8 ml-4 mb-4 mt-8 bg-stone-300 animate-pulse rounded-md"></h2>
      <div className="flex flex-col pl-4 pr-4 gap-2 mt-4">
        <div className="w-full h-4 dark:bg-slate-900 bg-stone-300 animate-pulse rounded-md"></div>
        <div className="w-full h-4 dark:bg-slate-900 bg-stone-300 animate-pulse rounded-md"></div>
        <div className="w-full h-4 dark:bg-slate-900 bg-stone-300 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export const SkeletonSearchbar = () => {
  return (
    <div className="w-96 shadow-md flex relative ">
      <span className="w-96 p-7 pl-20 bg-stone-300 dark:bg-slate-900 animate-pulse"></span>
    </div>
  );
};

export const SkeletonSelect = () => {
  return (
    <div className="bg-stone-300 pt-4 w-40 h-14 text-center shadow-md z-20 dark:bg-slate-900 animate-pulse " />
  );
};

export const SkeletonContainer = () => {
  const array = Array.from(Array(250).keys());
  return (
    <div>
      <div className="m-5 flex flex-col  items-center sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center sm:m-20">
        <SkeletonSearchbar />
        <SkeletonSelect />
      </div>

      <div className="grid grid-cols-1 justify-items-center w-full gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {array.map((element) => (
          <SkeletonCard />
        ))}
      </div>
    </div>
  );
};
