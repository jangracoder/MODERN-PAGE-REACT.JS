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
      <div className="mt-10 flex flex-wrap">
        {features.map((feature,index)=>(
            <div key={index} className="bg-slate-500">
                <div className="flex bg-slate-800  ">
                    <div className="text-orange-700 bg-slate-900">
                        {feature.icon}
                    </div>
                    <div>
                        <h5 className="text-xl bg-lime-800">{feature.text}</h5>
                        <p className="mx-14 bg-indigo-800">{feature.description}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
