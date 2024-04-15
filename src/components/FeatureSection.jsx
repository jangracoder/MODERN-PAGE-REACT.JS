import React from "react";
import { features } from "../constants";



function FeatureSection() {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <span className="text-orange-500 text-sm bg-neutral-900 rounded-full px-2 font-medium py-1">
          FEATURE
        </span>
        <h2 className="mt-10 text-3xl tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap border-b  border-neutral-700/70 ">
        {features.map((feature,index)=>(
            <div key={index} className="mb-20">
                <div className="flex  mx-6 ">
                    <div className="text-orange-700 mx-6 h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center p-2">
                        {feature.icon}
                    </div>
                    <div>
                        <h5 className="text-xl mt-1 mb-8">{feature.text}</h5>
                        <p className="px-2 text-gray-500">{feature.description}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
