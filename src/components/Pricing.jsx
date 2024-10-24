import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="imprensa" />
      <div className="pb-20 pt-20 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor">Área de Imprensa</h2>
              {/* <p className="mb-6 text-secondaryText">
              Acesse imagens e conteúdos exclusivos para a imprensa  
              </p> */}
            </div>
            <div className="flex flex-wrap flex-col lg:flex-col -mx-4 items-center">
              

              <div className="w-[350px] sm:w-[380px] lg:w-3/3 px-4 mb-8 lg:mb-0 items-center">
                <div className="px-8 py-4 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 text-xl font-bold font-heading text-primaryText text-center">
                  Imagens e conteúdos disponíveis para download 

                  </h3>
<a href="https://drive.google.com/drive/folders/0B-tEKNfe74LUcHlOcTRvNnhlcEU?resourcekey=0-4yEth742eeofDtQ0LO2JZA" target="_blank" >
                  <button
                    className="inline-block text-center py-2 px-4 w-full text-secondaryColor contained-button leading-loose transition duration-200 mt-10"
                    // onClick={() => setIsModalOpen(true)}
                    ahref="https://drive.google.com/drive/folders/0B-tEKNfe74LUcHlOcTRvNnhlcEU?resourcekey=0-4yEth742eeofDtQ0LO2JZA"
                    aria-label="Get started"
                  >
                    Entrar
                  </button>
</a>                  
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
