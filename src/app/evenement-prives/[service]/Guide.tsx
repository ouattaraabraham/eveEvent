import { NOTRE_GUIDE } from "@/app/data";

const data ={
    h3:"Notre guide pour un anniversaire inoubliable !",
    gp:[
      {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
      {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
      {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
      {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
      {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
      {txt1:"Créez une ambiance magique : ",txt2:" Définissez un thème pour votre soirée. Ambiance années 80 ? Ambiance Gatsby ? Généralement, c'est par la couleur de votre décoration que cela se fera ressentir. Pour une ambiance réussie, décorez toutes les surfaces de la pièce, y compris le plafond, via des guirlandes par exemple !",},
  
    ]
  }
  

const Guide = () => {
    return (
        <section className='bg-white'>
         <div className='mx-auto py-[50px] lg:py-[100px] w-[90%] sm:w-[80%] lg:w-[60%] max-w-[1080px] '>
          <h2 className='text-[20px] lg:text-[28px] text-center font-semibold mb-[5%]'>{NOTRE_GUIDE.h2}</h2>
          {
            NOTRE_GUIDE.liste.map((item,index)=>
              <div key={index}>
                <p className='py-2'>
                  <strong className='text-gd-txt'>{item.txt1} </strong>
                  {item.txt2}
                </p>
              </div>
            )
          }

         </div>
       </section>
    );
};

export default Guide;