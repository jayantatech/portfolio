import React from "react";

const SectionTitle = ({ title, subtitle, description }) => {
  return (
    <div>
      <div classNameName="flex flex-row gap-3 w-full max-md:flex-col">
        <div classNameName="min-w-[30%] max-lg:pr-0 pr-20">
          <h2 classNameName="text-4xl font-[Roboto] font-semibold max-xl:text-3xl">
            {title}
          </h2>
          <span classNameName="font-[Roboto] font-semibold">{subtitle}</span>
        </div>
        <div classNameName="flex flex-row gap-3">
          <div classNameName="w-[10px] h-full bg-[#2C698D] max-md:hidden"></div>
          <p classNameName="font-[poppins]"> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
