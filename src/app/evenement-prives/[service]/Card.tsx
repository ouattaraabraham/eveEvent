
import Image from 'next/image'
import Link from 'next/link'
import Btn from '@/app/component/Btn'
import BtnContact from '@/app/component/BtnContact'

function Carde({props}:any) {
  return (
    <div className='bg-bg'>
        
        <section>
         <div className='mx-auto py-[50px] lg:py-[100px] w-[90%] md:w-[80%] max-w-[1080px] lg:flex justify-between'>
          <div className='lg:w-[47%] pb-[30px] lg:pb-0 mb-[30px] lg:mb-0 lg:mr-[5.5%]]'>
            <div>
                <h3 className='mb-[4%] lg:mb-[8%] text-[22px]] text-[31px] text-txt-style'>{props.card.h3}</h3>

              {
                props.card.liste.map((item:any,index:number)=>
                  <p key={index}  className='pb-[1em]'>{item}</p>
                )
              }
                <Link href={props.link}>
                  <BtnContact/>
                </Link>
              </div>
          </div>

          <div className='lg:w-[47%] h-[400px] mb-[7%] lg:mb-[0] flex'>
                <Image className='object-cover' src={props.card.img} alt='decoratrice' />
            </div>
          
         </div>
       </section>
    </div>
  )
}

export default Carde