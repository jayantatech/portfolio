import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import copy from "clipboard-copy";

import { BgShape, BgShape2 } from "../../../assets/icons";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";

const ContactSection = () => {
  const [copyHover, setCopyHover] = useState(false);
  const [copyClick, setCopuClick] = useState(false);
  const [load, SetLoad] = useState(false);

  const handleCopy = async () => {
    const email = "jayantaPaikpara@gmail.com";
    try {
      await copy(email);
      setCopuClick(true);
    } catch {
      alert("Unable to copy email");
    }
  };

  useEffect(() => {
    if (copyClick) {
      setTimeout(() => {
        setCopuClick(false);
        setCopyHover(false);
      }, 2000);
    }
  }, [copyClick]);

  const sectionRef = UseIntersectionObserver(() => {
    SetLoad(true);
  });
  return (
    <div ref={sectionRef} className="overflow-hidden">
      <ContentWrapper>
        <div
          id="Contact"
          className="flex items-center justify-center w-full py-20 max-md:flex-col "
        >
          <div
            className={`w-1/2 mx-3 flex items-center justify-center relative max-md:w-full transition-all duration-1000 ${
              load ? "-translate-x-0" : "-translate-x-[170%]"
            }`}
          >
            <div className="w-24 h-24 p-2 rotate-180 rounded-full absolute top-0 left-0 -translate-y-14 ">
              <img src={BgShape} alt="" className="w-full h-full" />
            </div>
            <div className="w-28 h-28 p-2 absolute bottom-0 right-0  translate-y-28">
              <img
                src={BgShape}
                alt=""
                className="w-full h-full max-lg:-translate-y-12 max-md:-translate-y-28"
              />
            </div>
            <div className=" w-full h-full pt-6">
              <span className="text-xl font-bold text-blue-500">
                Let's Connect
              </span>
              <h3 className=" text-[57px] leading-tight font-bold font-[Roboto] py-3 max-lg:text-[45px]">
                Building the Future: How Can I Contribute to Your Team?
              </h3>
              <p className=" py-2 font-[poppins]">
                I am not just seeking a job; I crave a mission. A chance to join
                a team shaping a brighter future, where my skills and passion
                truly matter. Share your vision, challenges, dreams. "
              </p>
              <p className="py-2 font-[poppins]">
                Every great journey starts with a conversation—I'm eager to hear
                yours. Let's craft something remarkable, together.
              </p>
              <div className="py-4 flex flex-row gap-3 flex-wrap">
                <span className="py-1 px-2 bg-[#262D43] font-[Roboto] text-white font-semibold rounded-lg">
                  Web Designer
                </span>
                <span className="py-1 px-2 bg-[#C9D5FF] font-[Roboto]  font-semibold rounded-lg">
                  User Interface Specialist
                </span>
                <span className="py-1 px-2 bg-[#E3F6F5] font-[Roboto]  font-semibold rounded-lg">
                  React Developer
                </span>
                <span className="py-1 px-2 bg-[#2C698D] text-white font-[Roboto]  font-semibold rounded-lg">
                  Frontend Engineer
                </span>
                <span className="py-1 px-2 bg-[#262D43] text-white font-[Roboto]  font-semibold rounded-lg">
                  UI/UX Designer & Developer
                </span>
                <span className="py-1 px-2 bg-[#C9D5FF] font-[Roboto]  font-semibold rounded-lg">
                  Responsive Design
                </span>
              </div>
            </div>
          </div>
          <div
            className={`w-1/2 mx-3 px-4 py-4 border rounded-md hover:shadow-md max-md:w-full transition-all duration-1000 ${
              load ? "-translate-x-0" : "translate-x-[170%]"
            }`}
          >
            <div>
              <form
                action="https://formsubmit.co/jayantaPaikpara@gmail.com"
                method="POST"
              >
                <div className="flex flex-col gap-6 max-lg:gap-3">
                  <div className="flex w-full gap-3 max-lg:flex-col max-lg:gap-2">
                    <div className="flex flex-col gap-2 w-[50%] max-lg:w-full">
                      <label htmlFor="Name" className=" text-lg font-bold">
                        Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="Name"
                        id="Name"
                        className="w w-full h-12 p-3 rounded-md outline-none text-lg bg-slate-100"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-[50%] max-lg:w-full">
                      <label htmlFor="Email" className=" text-lg font-bold">
                        Email <span>*</span>
                      </label>
                      <input
                        type="email"
                        name="Email"
                        id="Email"
                        className="w w-full h-12 p-3 rounded-md outline-none text-lg bg-slate-100"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex w-full gap-3 max-lg:flex-col max-lg:gap-2">
                    <div className="flex flex-col gap-2 w-[50%] max-lg:w-full">
                      <label htmlFor="Company" className=" text-lg font-bold">
                        Company Name <span></span>
                      </label>
                      <input
                        type="text"
                        name="Company"
                        id="Company"
                        className="w w-full h-12 p-3 rounded-md outline-none text-lg bg-slate-100"
                        placeholder="Enter Brand Name"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-[50%] max-lg:w-full">
                      <label htmlFor="Email" className=" text-lg font-bold">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="Subject"
                        id="Subject"
                        className="w w-full h-12 p-3 rounded-md outline-none text-lg bg-slate-100"
                        placeholder="Enter Your Subject"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="pt-3 pb-2">
                    <label htmlFor="Message" className=" text-lg font-bold">
                      Message
                    </label>
                    <textarea
                      name="Message"
                      id="Message"
                      placeholder="Enter Your Message"
                      className=" text-lg outline-none h-[160px] resize-none w-full bg-slate-100 rounded-md mt-1 p-3"
                    ></textarea>
                  </div>
                </div>
                <div className=" border px-2 py-2 rounded">
                  <button
                    type="submit"
                    id="submit"
                    value={"submit"}
                    className=" w-full h-11 rounded-md bg-[#262D43] text-white hover:bg-[#2C698D] text-xl font-bold"
                  >
                    Send
                  </button>
                  <div className="flex items-center justify-center pt-1 text-base gap-2 relative">
                    <span className=" font-bold">Email:</span>
                    JayantaPaikpara@gmail.com
                    <span className="">
                      <span
                        className={`text-md px-2 rounded-md py-[2px] absolute right-12 bottom-0 translate-y-8 min-w-[145px] text-center ${
                          !copyHover ? "hidden" : "visible"
                        } ${
                          !copyClick
                            ? "bg-[#C9D5FF]"
                            : " bg-green-500 text-white"
                        }`}
                      >
                        <p className=" text-md font-medium">
                          {!copyClick ? "Copy to Clipboard" : "Copied"}
                        </p>
                      </span>

                      {!copyClick ? (
                        <i
                          className="ri-clipboard-line text-xl hover:text-blue-600 cursor-pointer"
                          onMouseEnter={() => setCopyHover(true)}
                          onMouseLeave={() => setCopyHover(false)}
                          onClick={handleCopy}
                        ></i>
                      ) : (
                        <i className="ri-check-line text-xl text-green-500 font-bold"></i>
                      )}
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ContactSection;
