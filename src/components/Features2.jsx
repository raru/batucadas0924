import { motion } from "framer-motion";

import jottaquest from "../assets/images/jottaquest.jpg" 
import pitty from "../assets/images/pitty.jpg" 
import nandoreis from "../assets/images/nandoreis.jpg" 
import emicida from "../assets/images/emicida.jpg" 
import karolconca from "../assets/images/karolconca.jpg" 
import mariarita from "../assets/images/mariarita.jpg" 

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-4/12 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            
            <div className="py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={jottaquest.src}
                alt="Jotta Quest"
                className="rounded-xl  main-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={pitty.src}
                alt="Pitty"
                className="rounded-xl  main-border-gray"
              />
            </div>
            
            <div className="py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={nandoreis.src}
                alt="Nando Reis"
                className="rounded-xl  main-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={emicida.src}
                alt="Emicida"
                className="rounded-xl  main-border-gray"
              />
            </div>
            
            <div className="py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={karolconca.src}
                alt="Karol Conca"
                className="rounded-xl  main-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={mariarita.src}
                alt="Maria Rita"
                className="rounded-xl  main-border-gray"
              />
            </div>

          </div>
        </div>

        <div className="w-full lg:w-8/12 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">clientes e projetos</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
            Cada projeto é tratado com uma dedicação quase artesanal
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Desde sua criação, a Batucada Comunicação tem sido responsável pela divulgação de projetos para empresas como Trama, Disney, Deck, Polysom, Sony Music, Universal, Warner, Laboratório Fantasma, Skol Music, Natura, Nokia, Mix FM, Nivea, Dueto e Midas Music. A agência também atuou na divulgação de festivais como o Nublu Jazz Festival, Alemanha Groove, Matanza Fest, El Grande Conserto (Casa de Francisca) e Rec-Beat; shows internacionais de artistas como Bad Brains, Café Tacvba, Didier Lockwood e Jovanotti; além de projetos especiais como Elis 70 Anos, o espetáculo "Rogério Flausino & Wilson Sideral Cantam Cazuza" e a aclamada turnê conjunta de Pitty e Nando Reis, "As Suas, As Minhas e As Nossas".
            </p>

            <p className="mb-12 text-secondaryText leading-loose">
            Entre os muitos artistas que utilizam regularmente nossos serviços ou já trabalharam conosco, destacam-se Jota Quest, Pitty, Nando Reis, Emicida, Karol Conka, Maria Rita, Thiago Iorc, Manu Gavassi, Fernanda Takai, Marcos Valle, Roberto Menescal, Jorge Vercillo, Tropkillaz, Iggor Cavalera, Marcelo Falcão, Paulo Miklos, Pupillo, Alceu Valença, Lô Borges, Ira!, Otto, Marjorie Estiano, Wilson Simoninha, Far From Alaska, Maglore, Roberta Campos, DJ Marky, Luciana Mello, Paula Lima, Negra Li, Mundo Livre S/A, Mahmundi, Vintage Culture, The Baggios, Rael, Drik Barbosa, Hamilton de Holanda, Toquinho, Zizi Possi, Colomy, O Teatro Mágico, Electric Mob, Dead Fish e Elza Soares.
            </p>
  

          </div>
        </div>
      </div>
    </motion.div>
  </section>
);