const Loading = () => {
  return (
    <section className="w-full mt-10 md:mt-15 px-5">
      <div className="max-w-270 mx-auto">
        {/* Heading skeleton */}
        <div className="mb-7">
          <div className="h-9 w-48 bg-[#20242E] rounded-lg animate-pulse"></div>
          <div className="h-5 w-80 max-w-full bg-[#20242E] rounded-lg mt-3 animate-pulse"></div>
        </div>

        {/* Cards skeleton */}
        <div className="tablet:grid tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-[#15171D] rounded-2xl overflow-hidden border border-[#20242E] mb-5 tablet:mb-0"
            >
              <div className="w-full h-50 bg-[#20242E] animate-pulse"></div>

              <div className="px-5">
                <div className="flex gap-3 mt-7 mb-4">
                  <div className="h-6 w-20 bg-[#20242E] rounded-2xl animate-pulse"></div>
                  <div className="h-6 w-24 bg-[#20242E] rounded-2xl animate-pulse"></div>
                </div>

                <div className="h-7 w-3/4 bg-[#20242E] rounded-lg animate-pulse"></div>

                <div className="h-5 w-1/2 bg-[#20242E] rounded-lg mt-3 animate-pulse"></div>

                <div className="h-px bg-[#20242E] my-4"></div>

                <div className="flex gap-7 mb-7">
                  <div className="h-5 w-16 bg-[#20242E] rounded-lg animate-pulse"></div>
                  <div className="h-5 w-20 bg-[#20242E] rounded-lg animate-pulse"></div>
                  <div className="h-5 w-12 bg-[#20242E] rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
