import { CheckCircle2 } from "lucide-react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";

function Workflow() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center tracking-wide mx-5 md:text-6xl">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          coding workflow.
        </span>
      </h2>

      <div className="md:flex">
        <img className="px-8 mt-2 md:w-1/2" src={code} alt="code image" />
        <div className="mt-14 flex flex-wrap  ">
          {checklistItems.map((items, index) => (
            <div key={index} className="mb-12">
              <div className="flex  mx-6 ">
                <div className="text-green-500 mx-6 h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center p-2">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="text-xl mt-1 mb-2">{items.title}</h5>
                  <p className=" text-gray-500">{items.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
