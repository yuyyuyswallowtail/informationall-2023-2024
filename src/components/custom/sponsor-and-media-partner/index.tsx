import {
  gridDark,
  mediaLogo,
  mediaPartner1,
  mediaPartner2,
  mediaPartner3,
  mediaPartner4,
  sponsor,
} from "@/utils/imagesPath";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const SponsorMediaPartner = () => {
  return (
    <section className="relative flex flex-col justify-center w-full overflow-hidden min-h-[calc(100vh_-_27px)]">
      <motion.div
        className="absolute w-full h-auto -top-8 -bottom-8"
        animate={{
          translateY: "-27px",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
        }}
        style={{
          backgroundImage: `url(${gridDark})`,
        }}
      ></motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
        }}
        style={{ transition: "all 1.5s" }}
        className="absolute z-20 flex items-center justify-center w-full top-1/2 bottom-1/2"
      >
        <img
          src={mediaLogo}
          alt={mediaLogo}
          className="h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{
          rotate: 0,
          scale: 1.1,
        }}
        whileInView={{
          rotate: 10,
        }}
        style={{ transition: "all 1.25s" }}
        className="absolute z-30 flex overflow-hidden border-y-2 border-card bg-primary"
      >
        <Marquee
          direction={"left"}
          autoFill={true}
          className="flex gap-4 p-1 w-ful bg-primary rounded-2xl border-card"
        >
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={sponsor}
            alt={sponsor}
          />
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={mediaPartner1}
            alt={mediaPartner1}
          />
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={mediaPartner2}
            alt={mediaPartner2}
          />
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={mediaPartner3}
            alt={mediaPartner3}
          />
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={mediaPartner4}
            alt={mediaPartner4}
          />
        </Marquee>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{
          rotate: 0,
          scale: 1.1,
        }}
        whileInView={{
          rotate: -10,
        }}
        style={{ transition: "all 1.25s" }}
        className="absolute z-10 flex overflow-hidden border-y-2 border-card bg-primary"
      >
        <div className="absolute top-0 bottom-0 left-0 z-10 w-24 sm:w-32 md:w-64 lg:w-72 bg-gradient-to-l from-transparent to-primary"></div>
        <div className="absolute top-0 bottom-0 right-0 z-10 w-24 sm:w-32 md:w-64 lg:w-72 bg-gradient-to-l from-primary to-transparent"></div>
        <Marquee
          direction={"right"}
          autoFill={true}
          className="flex gap-4 p-1 w-ful bg-primary rounded-2xl border-card"
        >
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={sponsor}
            alt={sponsor}
          />
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={mediaPartner1}
            alt={mediaPartner1}
          />
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={mediaPartner2}
            alt={mediaPartner2}
          />
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={mediaPartner3}
            alt={mediaPartner3}
          />
          <img
            className="w-full h-auto mx-4 max-w-16 md:max-w-20 lg:max-w-24"
            src={mediaPartner4}
            alt={mediaPartner4}
          />
        </Marquee>
      </motion.div>
    </section>
  );
};

export default SponsorMediaPartner;
