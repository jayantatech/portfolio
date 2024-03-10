import React, { useState } from "react";
import MyImage from "../myImage/MyImage";

const KeySkillCard = ({ title, img, description }) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className="relative overflow-hidden bg-white shadow-xl transition-all duration-300 rounded-xl"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className=" absolute right-0 bottom-0 z-10 opacity-[0.07]">
        <MyImage
          src={img}
          className={"w-[200px] translate-x-10 translate-y-6  -rotate-45"}
        />
      </div>
      <div
        className={`w-[260px] h-[350px] flex items-center justify-center flex-col gap-3 px-4 py-3`}
      >
        <div
          className={`w-[120px] h-[120px] bg-[#C9D5FF] flex items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl ${
            mouseOver ? "scale-105" : ""
          }`}
        >
          <MyImage src={img} className={"w-[110px]"} />
        </div>
        <h3 className=" text-xl font-bold font-[Roboto]">{title}</h3>
        <p className=" text-start font-[poppins] w-full h-[140px] overflow-hidden text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default KeySkillCard;
