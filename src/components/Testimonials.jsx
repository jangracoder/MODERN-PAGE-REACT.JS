import React from "react";
import { testimonials } from "../constants";

function Testimonials() {
  return (
    <div className="border-b border-neutral-700/70 ">
      <h2 className="text-center mt-16 text-3xl mx-5  md:text-6xl">
        What People are saying
      </h2>
      <div className="mt-14 mb-20 md:flex md:flex-wrap md:ml-7 md:mt-20  ">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border border-neutral-700/70 bg-neutral-900 mx-10   rounded-lg mb-5 md:mx-3 md:w-[30%]  "
          >
            <div className="flex flex-col px-4 py-6">
              <div className="font-extralight leading-snug  tracking-wider">
                {item.text}
              </div>
              <div className="flex mt-10">
                <img
                  className="w-12 h-12 rounded-full "
                  src={item.image}
                  alt="image"
                />
                <div className="flex flex-col ml-5">
                  <span className="font-extralight">{item.user}</span>
                  <span className="text-neutral-700 text-sm">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
