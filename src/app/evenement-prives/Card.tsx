import React from 'react'
import Image from 'next/image'
import Btn from '../component/Btn'
import { DATA_PAGE_TT_LES_SERVICES } from '../data'

function Card() {

  return (
    <section className='py-[50px] lg:py-[100px] bg-rosee '>
       <h2 className='mb-[5%] lg:mb-[3%] text-center font-semibold font-Playwrite text-[22px] lg:text-[31px] '>{DATA_PAGE_TT_LES_SERVICES.h2}</h2>
      {
        DATA_PAGE_TT_LES_SERVICES.services.map(item=>
          <div key={item.id}  className={`${item.a?"bg-rose":""} py-[50px] lg:py-[75px] lg:bg-[#f7f7f700]`}>
            <div className={`relative  lg:bg-[linear-gradient(0deg,_#f7f7f700_18%,_#EEE8DF_0%)] mx-auto w-[80%] lg:w-[100%]  flex flex-col-reverse ${item.a?"lg:flex-row justify-end":"lg:flex-row-reverse justify-start"} lg:gap-5 `}>
              <div className={`relative lg:w-[45%] ${item.a?"lg:ml-[3%]":"lg:mr-[3%]"} `}>
                <h2 className='text-[20px] lg:text-[28px] text-txt-style font-Playwrite mt-[5%] lg:mt-[7%]'>{item.h3}</h2>
                <h3 className='mb-[5%] text-[18px] text-gd-txt font-semibold lg:text-[24px]'>{item.h4}</h3>
                <p className=' mb-[30px] lg:mb-[13%]'>{item.p}</p>
                <div className='lg:absolute bottom-[13%] '>
                  <Btn/>
                </div>
              </div>
              <div className='lg:w-[50%] mb-[30px] lg:mb-0 '>
                <Image src={item.img} alt='service decoration'/>
              </div>
            </div>
        </div>
        )
      }
    </section>
  )
}

export default Card