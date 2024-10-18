import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8 sm:-mt-8 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">

              <span className="block-subtitle">A Batucada Comunicação</span>
              <br/><br/>
              <p className="mb-10 text-secondaryText leading-loose">
              Fundada em 2007 em São Paulo, nasceu com o propósito de atender o setor de música e entretenimento. 
              <br/>
              Com uma filosofia de adaptação constante ao perfil e às necessidades de cada cliente, a agência se especializou em criar, desenvolver e executar estratégias de divulgação sob medida, cuidadosamente desenhadas para cada artista, empresa ou evento. Cada projeto é tratado com uma dedicação quase artesanal, assegurando que cada detalhe seja realizado com qualidade, empenho e atenção.
              </p>
              <p className="mb-10 text-secondaryText leading-loose">
              Nosso compromisso é atender a imprensa com clareza, concisão e eficiência, promovendo uma comunicação ágil e colaborativa que facilite o trabalho dos profissionais de mídia. A Batucada Comunicação valoriza a construção de relacionamentos sólidos e duradouros com a imprensa.  
              </p>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
