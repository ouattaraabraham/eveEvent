
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';

import { DATA_FOOTER } from "../data";
import { logo } from "../assets/logo";

export default function Footer() {
  return (
    <section className="bg-white">
      <div className=" mx-auto my-[50px]] mb-[25px]] lg:my-[50px]] bg-gray-300  w-full h-[2px] "> </div>
      <div className="mx-auto w-[90%] max-w-[1080px] text-[12px] py-[5%] lg:pb-[3%] ">
        <div className="w-[90%] lg:w-[100%] mx-auto text-[18px]  flex flex-wrap md:justify-between gap-10 ">
            <div className="w-[40%]] md:w-[30%]">
              <h3 className="mb-[2%] text-[22px] lg:text-[28px] text-txt-style font-semibold font-Playwrite">{DATA_FOOTER.div1.txt1}</h3>
                <div >
                  <ul className="list-none">
                    {DATA_FOOTER.div1.div.map((item, index) => (
                        <li className="relative border-b border-gray-300 py-2" key={index}>
                          <span className="absolute -left-9 top-6 transform -translate-y-1/2"><ChevronRight color="#DAC3A4" size={25}/></span>
                          {item.txt1} <br/> {item.txt2}
                          </li>
                    ))}
                  </ul>
                </div>
            </div>

            <div className="w-[40%]] md:w-[30%] ">
                <h4 className="font-Playwrite pb-[2%] text-[22px] lg:text-[28px] font-semibold text-txt-style  lg:pb-[4.174%]">{DATA_FOOTER.div2.txt1}</h4>

                <div >
                  <ul className="list-none">
                    {DATA_FOOTER.div2.div.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <li className="relative border-b border-gray-300 py-2" >
                        <span className="absolute -left-9 top-6 transform -translate-y-1/2"><ChevronRight color="#DAC3A4" size={25}/></span>
                        {item.name}
                      </li>
                     </Link>
                    ))}
                  </ul>
                </div>
            </div>

          <div className="md:w-[30%] pb-[30px]] lg:pb-[0] ">
            <div className="mb-[30px] lg:mb-[5%]">
              <div className="w-[150px]">
                <Image src={logo} alt="logo eve" />
              </div>
              <p className="mb-[5%]">
              Midlands HQ & Showroom:
              <br/>
              Asian Wedding Services UK LTD
              <br/>
              28 Cato Street North
              <br/>
              Nechells
              <br/>
              Birmingham
              <br/>
              B7 5AN
              </p>
              <div >
                <h3>Opening Hours:</h3>
                <p>Mon-Fri: 9am – 4pm</p>
              </div>
            </div> 
          </div>
        </div>


        <div className=" mx-auto lg:mt-[50px] mb-[2px] bg-gray-300  w-[60%] h-[2px] "> </div>
            <p className="text-[16px]  pt-4 mx-auto w-fit">Réalisé par astraOne solution digitale</p>
      </div>
    </section>
  );
}
