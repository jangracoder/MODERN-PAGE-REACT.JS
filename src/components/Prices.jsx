import { pricingOptions } from "../constants"
import { CheckCircle2 } from "lucide-react"

function Prices() {
  return (
    <div className='mt-20'>
        <h2 className='text-center text-3xl tracking-wide md:text-6xl'>Pricing</h2>
        <div className='flex flex-col flex-wrap mx-8 mt-10 md:flex-row md:gap-7 md:mx-4'>
               {pricingOptions.map((prices,index)=>(
                <div key={index} className="border-[1px] border-neutral-700/70 p-10 mb-5 rounded-xl">
                    <div className="flex flex-col gap-8 ">
                        <h2 className="text-4xl"> {prices.title}
                        {prices.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
                </h2>
                        <h2 className="text-5xl">{prices.price} <span className="text-base text-gray-400 -mx-1">/Month</span></h2>
                        {prices.features.map((detail,index)=>(
                            <div key={index} className="flex flex-col">
                              <div className="flex">
                                <CheckCircle2/>
                                <span className="ml-2">{detail}</span>
                              </div>
                            </div>
                        ))}
                        <a href="#" className="text-center text-xl border border-red-900 rounded-lg py-2 mt-10">Subscribe</a>
                    </div>
                </div>
               ))}
        </div>
    </div>
  )
}

export default Prices