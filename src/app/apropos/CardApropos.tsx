import Image from 'next/image';
import Link from 'next/link';
import {TrendingUp} from 'lucide-react';
import { DATA_APROPOS } from '../data';

export default function CardApropos() {
  return (
    <div className='mx-auto py-[50px] lg:py-[100px] w-[80%] max-w-[1080px] lg:flex justify-between'>
          
          <div className='lg:w-[47%] mb-[7%] lg:mb-[0] flex'>
              <Image className='w-full' src={DATA_APROPOS.img} alt='decoratrice' />
          </div>

         <div className='lg:w-[47%] pb-[30px] lg:pb-0 mb-[30px] lg:mb-0 lg:mr-[5.5%]]'>
           <div>
              <h3 className='mb-[4%] lg:mb-[8%] text-[24px] lg:text-[31px] text-txt-style'>{DATA_APROPOS.h3}</h3>
              {
                DATA_APROPOS.list.map((item,index)=>
                    <p key={index}  className='pb-[1em]'>{item}</p>
                )
              }
              <Link href={DATA_APROPOS.link}>
                <div className='border-2 border-txt-style w-fit p-2  mt-[5%] text-[22px] text-txt-style flex items-center gap-4'>
                    <h3>Contacter</h3>
                    <span><TrendingUp/></span>
                </div>
              </Link>
            
            </div>
         </div>
          
         </div>
  )
}
