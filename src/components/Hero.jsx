/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputerCanvas from "./ComputerCanvas";

const Hero = () => {
  return (
    <section className="relative w-ull h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute top-[120px] max-w-7xl mx-auto flex items-start gap-5 inset-0">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00031c]" />
          <div className="w-1 sm:h-80 h-40  bg-gradient-to-r from-[#002545] to-transparent" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#6b9ecb]">Gabriel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A full-stack Data Scientist <br className="sm:block hidden" /> and Python Developer with a
            strong background in web backend development 
          </p>
        </div>
      </div>
      <ComputerCanvas />
    </section>
  );
};

export default Hero;
