import React from "react";

const SectionTitle = ({ title, subtitle, description }) => {
  return (
    <div>
      <div className="flex flex-row gap-3 w-full max-md:flex-col">
        <div className="min-w-[30%] max-lg:pr-0 pr-20">
          <h2 className="text-4xl font-[Roboto] font-semibold max-xl:text-3xl">
            {title}
          </h2>
          <span className="font-[Roboto] font-semibold">{subtitle}</span>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-[10px] h-full bg-[#2C698D] max-md:hidden"></div>
          <p className="font-[poppins]"> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
