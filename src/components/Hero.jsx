/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-ull h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute top-[120px] max-w-7xl mx-auto flex items-start gap-5 inset-0">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
