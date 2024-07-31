import Image from "next/image"
import Btn from "./Btn"
import { SERVICE } from "../data"

export default function Service() {
  return (
    <section>
        <div className='bg-bg py-[50px] lg:py-[8%]  mx-auto'>
            <h2 className='mx-auto w-[90%] sm:w-[80%] lg:mb-[5%] text-gd-txt font-semibold tracking-[2px]] text-center max-w-3xl text-[18px] lg:text-[28px]'>{SERVICE.h2}</h2>
            <div className="w-[80%] mx-auto md:flex justify-between">
              {
                SERVICE.service.map((item,index)=>
                  <div key={index} className="mt-20 md:mt-0 bg-[linear-gradient(180deg,_#f7f7f700_44%,_#EEE8DF_44%)] w-[80vw] h-[75vw] md:w-[36vw] md:h-[33vw] lg:h-[32vw]">
                    <div className="mx-auto relative  flex flex-col items-center">
                        <Image className="object-cover w-[50vw] h-[50vw] md:w-[23vw] md:h-[23vw]" src={item.img} alt="img1"/>
                        <div className="py-2">
                          <Btn/>
                        </div>
                        <h3 className="text-center text-[18px] lg:text-[22px]">{item.h3}</h3>                   
                  </div>
                </div>
                )
              }
            
            </div>
        </div>
    </section>
  )
}
