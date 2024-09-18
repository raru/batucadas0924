import { motion } from "framer-motion";

import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";


import logo_dack_branca from "../assets/images/logo_dack_branca.png";
import logo_disney from "../assets/images/logo_disney.png";
import fantasma from "../assets/images/logo_lab-fantasma.webp";
import logo_natura from "../assets/images/logo_natura.png";
import logo_sonymusic from "../assets/images/logo_sonymusic.jpg";
import logo_trama from "../assets/images/logo_trama.jpg";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-black w-full mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText">
                Clientes e parcerias
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor">
                por todo Brasil
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <img
                src={logo_dack_branca.src}
                width="70"
                alt="DEck Discos"
                className=""
              />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
              <img
                src={logo_disney.src}
                width="70"
                alt="DEck Discos"
                className=""
              />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
              <img
                src={fantasma.src}
                width="70"
                alt="DEck Discos"
                className=""
              />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
              <img
                src={logo_natura.src}
                width="70"
                alt="DEck Discos"
                className=""
              />
              </div>

              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
              <img
                src={logo_sonymusic.src}
                width="70"
                alt="DEck Discos"
                className=""
              />
              </div>
              <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
              <img
                src={logo_trama.src}
                width="70"
                alt="DEck Discos"
                className=""
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
