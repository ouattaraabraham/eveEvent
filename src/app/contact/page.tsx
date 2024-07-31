"use client"
import React from "react";
import { DATA_CONTACT } from "../data";
import Btn from "../component/Btn";

const Contacter = () => {
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;

    const element = form.elements;

    const nom = element.Nom.Value;
    const prenom = element.Prenom.Value;
    const email = element.Email.Value;
    const entreprise = element.Entreprise.Value;
    const telephone = element.Telephone.Value;
    const checkbox = element.Checkbox.Value;

    const objetForm = {
      nom: nom,
      prenom: prenom,
      email: email,
      entreprise: entreprise,
      telephone: telephone,
      checkbox: checkbox,
    };
    console.log("form:" + objetForm);

    form.reset();
  };
  return (
      <section className="bg-bg">
        <div className="mx-auto max-w-[1080] w-[80%] lg:w-fulll py-[50px] lg:py-[100px]">
          <div className="lg:flex justify-between gap-5">
            {/* left */}
            <div className={`lg:w-[45%] bg-custom-image bg-cover bg-center h-64 w-full`}
          
            >
              <div className="pb-10">
                <h1 className="text-[40px] text-txt-style font-Playwrite lg:text-[60px] font-bold pb-[15px]">
                  {DATA_CONTACT.left.h1}
                </h1>
                <p>{DATA_CONTACT.left.p1}</p>
              </div>
              {/* nos adresses */}
              <div className="pb-5">
                <h3 className="font-semibold text-txt-style font-Playwrite pb-3">
                  {DATA_CONTACT.left.coordonnees.h3}
                </h3>
                <p className="pb-2">{DATA_CONTACT.left.coordonnees.num}</p>
                <p>{DATA_CONTACT.left.coordonnees.lenkSite}</p>
              </div>
              {/* adress */}
              <div className="pb-5">
                <h3 className="font-semibold text-txt-style font-Playwrite pb-2">
                  {DATA_CONTACT.left.adresse.h3}
                </h3>
                <p>{DATA_CONTACT.left.adresse.rue}</p>
              </div>
            </div>
            {/* formulaire */}
            <div className="lg:w-[45%]  border-[#172153] mt-10 lg:mt-0 ">
              <form
              className="w-[90%]] mx-autoo"
                onSubmit={handlerSubmit}
                action=""
              >
               {/* nom , prenom    */}
              <div className="mb-[5%] lg:flex justify-between gap-4">
                <div className="mb-[5%]">
                  <label htmlFor={DATA_CONTACT.right.form.inputs.inputNom.nom}>
                  {DATA_CONTACT.right.form.inputs.inputNom.nom}
                  </label>
                  <div >
                      <input
                      className="border-b-4 border-gray-300 focus:border-gray-400 p-2 focus:outline-none focus:border-b-2  bg-bg w-full ppx-4 ppy-2"
                      type={DATA_CONTACT.right.form.inputs.inputNom.type}
                      id={DATA_CONTACT.right.form.inputs.inputNom.nom}
                    />
                  </div>
                </div>
                <div className="mb-[5%]">
                  <label htmlFor={DATA_CONTACT.right.form.inputs.inputPrenom.nom}>
                  {DATA_CONTACT.right.form.inputs.inputPrenom.nom}
                  </label>
                  <div >
                      <input
                      className="border-b-4 border-gray-300 focus:border-gray-400 p-2 focus:outline-none focus:border-b-2  bg-bg w-full ppx-4 ppy-2"
                      type={DATA_CONTACT.right.form.inputs.inputPrenom.type}
                      id={DATA_CONTACT.right.form.inputs.inputPrenom.nom}                    />
                  </div>
                </div>
              </div>
                 {/* e-mail */}
                <div className="mb-[5%]"> 
                  <label htmlFor={DATA_CONTACT.right.form.inputs.inputEmail.nom}>
                  {DATA_CONTACT.right.form.inputs.inputEmail.nom}
                  </label>
                  <div >
                      <input
                      className="border-b-4 border-gray-300 focus:border-gray-400 p-2 focus:outline-none focus:border-b-2  bg-bg w-full ppx-4 ppy-2"
                      type={DATA_CONTACT.right.form.inputs.inputEmail.type}
                      id={DATA_CONTACT.right.form.inputs.inputEmail.nom}
                      required
                    />
                  </div>
                </div>
                {/* telephone  */}
                <div className="mb-[5%]">
                  <label htmlFor={DATA_CONTACT.right.form.inputs.inputTelephone.nom}>
                  {DATA_CONTACT.right.form.inputs.inputTelephone.nom}
                  </label>
                  <div >
                      <input
                      className="border-b-4 border-gray-300 focus:border-gray-400 p-2 focus:outline-none focus:border-b-2  bg-bg w-full ppx-4 ppy-2"
                      type={DATA_CONTACT.right.form.inputs.inputTelephone.type}
                      id={DATA_CONTACT.right.form.inputs.inputTelephone.nom}
                    />
                  </div>
                </div>


                {/* message */}
                 <div className="mb-[5%]">
                  <label htmlFor={DATA_CONTACT.right.form.inputs.inputMessage.nom}>
                  {DATA_CONTACT.right.form.inputs.inputMessage.nom}
                  </label>
                  <div >
                      <textarea
                      className="border-b-4 border-gray-300 focus:border-gray-400 p-2 focus:outline-none focus:border-b-2  bg-bg w-full ppx-4 ppy-2"
                      rows={DATA_CONTACT.right.form.inputs.inputMessage.rows}
                      cols={DATA_CONTACT.right.form.inputs.inputMessage.col}
                      id={DATA_CONTACT.right.form.inputs.inputMessage.nom}
                      required
                    />
                  </div>
                </div>
      
                <input
                  type={DATA_CONTACT.right.form.inputs.inputCheckbox.type}
                  id={DATA_CONTACT.right.form.inputs.inputCheckbox.nom}
                />{" "}
                <label
                  className="text-white text-[13px] lg:text-[16px]"
                  htmlFor={DATA_CONTACT.right.form.inputs.inputlabel.htmlFor}
                >
                  {DATA_CONTACT.right.form.inputs.inputlabel.text}
                </label>
             
                 {/* btn */}
                 <div>
                  <Btn/>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contacter;










// export default function contacte() {
//   return (
//     <div >
//       <section className='mx-auto w-[80%] py-[50px] lg:py-[100px]'>
//         <div className='lg:w-[45%]'>

//         </div>
//         <div className='lg:w-[50%]'>
          
//         </div>
//       </section>
//     </div>
//   )
// }
