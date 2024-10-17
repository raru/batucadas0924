
import { motion } from "framer-motion";

import imgbatucadas from "../assets/images/logo-batucada_green.png";

export const Hero = () => {


  return (
    <section
      className="w-screen  flex justify-center items-center bg-bgDark1 mb-[10vw] hero-bg-gradient"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center mt-10">


        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={imgbatucadas.src}
              alt="Batucadas"
              className="p-14"
            />
          </div>
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText mb-8  px-8 sm:px-8 md:px-20 lg:px-4 mt-10">
            <h1 className="inline md:hidden">Estratégias de divulgação sob medida</h1>
            <h1 className="hidden md:inline">Estratégias de divulgação sob medida </h1>
          </div>
        </motion.div>


        {/* <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div> */}
      </div>

    </section>
  );
};
