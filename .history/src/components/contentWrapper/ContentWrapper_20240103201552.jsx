import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="contentwrapper w-full md:max-w-[1200px] my-0 mx-auto py-0 px-5 ">
      {children}
    </div>
  );
};

export default ContentWrapper;
