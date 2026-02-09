import HeroDescription from "./_components/Description";
import HeroBrand from "./_components/Brand";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex flex-col gap-1 p-1 overflow-hidden min-h-dvh">
      <div className="z-30 grid w-full grid-cols-1 gap-1 overflow-hidden lg:grid-cols-2 min-h-dvh">
        <motion.div
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          style={{ transition: "all 1s" }}
          className="flex w-full"
        >
          <HeroDescription />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: "100%",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          style={{ transition: "all 1s" }}
          className="flex w-full"
        >
          <HeroBrand />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
