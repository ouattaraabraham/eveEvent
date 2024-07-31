import React from 'react'
import Image from 'next/image'
import {TrendingUp} from 'lucide-react';

import { img4 } from '../assets/img'
import Service from '../component/Service'


export default function apropos() {
  return (
    <div>
       <section>
         <div className='mx-auto py-[50px] lg:py-[100px] w-[80%] max-w-[1080px] lg:flex justify-between'>
          
          <div className='lg:w-[47%] mb-[7%] lg:mb-[0] flex'>
              <Image className='w-full' src={img4} alt='decoratrice' />
          </div>

         <div className='lg:w-[47%] pb-[30px] lg:pb-0 mb-[30px] lg:mb-0 lg:mr-[5.5%]]'>
           <div>
              <h3 className='mb-[4%] lg:mb-[8%] text-[31px] font-Playwrite text-txt-style'>Nous Sommes ....</h3>
              <p className='pb-[1em]'>
              Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.
              </p>
              <p className='pb-[1em]'>
              Magalie est une spécialiste de l’évènementiel touristique international. Elle est bilingue, mariée et mère d’un petit garçon. Après des années en tant que responsable d’agence de tourisme, et des milliers de voyages évènementiels organisés aux quatre coins du monde auprès d’une clientèle exigeante, elle lance Dreams Come True Events en 2017.
              </p>
              <p className='pb-[1em]'>
              Son énergie, son professionnalisme et l’attention portée à ses clients l’aident à atteindre ce lien spécial qui lui est si précieux dans une collaboration professionnelle et humaine. Sa priorité est que ses clients lui fassent confiance et que leur satisfaction soit décuplée.
              </p>

              <div className='border-2 border-txt-style w-fit p-2 font-Playwrite mt-[5%] text-[22px] text-txt-style flex items-center gap-4'>
                <h3>Contacter</h3>
                <span><TrendingUp/></span>
               </div>
            </div>
         </div>
          
         </div>
       </section>
       <Service/>

    </div>
  )
}
