import React, { useState } from "react";
import { projectImg } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import MyImage from "../myImage/myImage";

const ProjectBar = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const navigate = useNavigate();
  const pageLoad = () => {
    navigate(`/protfolio/${item.site}`);
  };

  return (
    <div>
      {" "}
      <div classNameName="w-[330px] max-lg:w-[330px] bg-gray-100 h-[470px] px-4 py-4 rounded-2xl shadow-2xl">
        <div classNameName="w-full flex items-center justify-center bg-black rounded-xl">
          <div
            classNameName="w-full  h-[220px] rounded-lg overflow-hidden relative cursor-pointer"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <div
              classNameName={`absolute transition-transform duration-1000 ease-in-out ${
                isHovered && "-translate-y-[calc(100%-220px)]"
              }`}
            >
              <MyImage src={item.img} classNameName="w-full h-auto" />
            </div>
          </div>
        </div>
        <div classNameName="pt-2">
          <h3 classNameName="font-[Roboto] text-2xl font-bold">{item.title}</h3>
          <p classNameName="font-[poppins] w-full max-h-[120px]  overflow-hidden">
            {item.description.map((item) =>
              item.secDescription.map((desText) => desText.content)
            )}
          </p>
          <div classNameName="w-full flex items-center justify-center">
            <button
              classNameName=" max-sm: max-lg:px-24 lg:px-24 py-2 rounded-md text-lg font-bold mt-2  font-[Roboto] text-white bg-[#262D43] transition-all duration-300 hover:bg-[#2C698D]"
              onClick={pageLoad}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBar;
