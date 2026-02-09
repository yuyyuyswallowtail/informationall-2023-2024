import { motion } from "framer-motion";
import { timeline1, timeline2 } from "@/utils/imagesPath";
const Timeline = () => {
  return (
    <div className="relative flex flex-col overflow-hidden min-h-dvh">
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.75,
            ease: "linear",
          },
        }}
        src={timeline1}
        alt={timeline1}
        className="absolute z-10 h-auto max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-sm left-[5%] -top-[5%] rotate-45"
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.75,
            ease: "linear",
          },
        }}
        src={timeline2}
        alt={timeline2}
        className="absolute z-20 h-auto max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-sm -right-[5%] -bottom-[5%] -rotate-45"
      />
      <div className="z-30 flex flex-col gap-4 py-48">
        <motion.h1
          initial={{
            x: "-100%",
          }}
          animate={{
            x: 0,
            transition: {
              delay: 1,
              ease: "easeIn",
            },
          }}
          className="text-6xl text-center md:text-7xl lg:text-9xl font-general-sans text-card"
        >
          Explore Trends And
        </motion.h1>
        <motion.h1
          initial={{
            x: "100%",
          }}
          animate={{
            x: 0,
            transition: {
              delay: 1.5,
              ease: "easeIn",
            },
          }}
          className="text-6xl text-center md:text-7xl lg:text-9xl font-general-sans text-card"
        >
          Innovation
        </motion.h1>
        <motion.h1
          initial={{
            x: "-100%",
          }}
          animate={{
            x: 0,
            transition: {
              delay: 2,
              ease: "easeIn",
            },
          }}
          className="text-6xl text-center md:text-7xl lg:text-9xl font-general-sans text-card"
        >
          In Developer World!
        </motion.h1>
      </div>
    </div>
  );
};

export default Timeline;
