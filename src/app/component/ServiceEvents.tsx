import Image from "next/image";
import { SERVICE_EVENT } from "../data";
import Link from "next/link";

function ServiceEvents() {
  return (
    <section>
      <div className="pt-[5%] py-[7%] lg:py-[7%] lg:pt-[5%] bg-[linear-gradient(180deg,_#f7f7f7_44%,_#EEE8DF_44%)]">
        <div className=" text-gd-txt w-[90%] mx-auto text-center pt-[30px] lg:py-[2%]">
          <h2 className="tracking-[2px] font-Playwrite text-txt-style  text-[31px] mb-[2%]">
            {" "}
            {SERVICE_EVENT.h2}
          </h2>
          <h3 className="mb-[3%] text-[20px] lg:text-[22px] font-semibold">{SERVICE_EVENT.h3}</h3>
        </div>

        <div className="mx-auto w-[90%] sm:w-[80%] font-Playwrite font-semibold text-[18px] lg:text-[20px] flex flex-wrap justify-between ">
          {SERVICE_EVENT.service.map((item, index) => (
            <div
              className="bg-white w-[45%] md:w-[20.75%] mt-10 md:mt-0"
              key={index}
            >
             <Link href={item.link}>

              <Image 
              src={item.img} alt={item.txt} />
                <p className="text-center py-2">{item.txt}</p>
             </Link>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceEvents;
