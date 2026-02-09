import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Footer = () => {
  const data = [
    {
      title: "hmif.org",
      icon: <Globe size={20} strokeWidth={1.5} />,
      path: "https://hmif.org",
    },
    {
      title: "hmif@ftumj.ac.id",
      icon: <Mail size={20} strokeWidth={1.5} />,
      path: "mailto:hmif@ftumj.ac.id",
    },
    {
      title: "hmif_ftumj",
      icon: <Instagram size={20} strokeWidth={1.5} />,
      path: "https://www.instagram.com/hmif_ftumj",
    },
    {
      title: "@hmif_ftumj",
      icon: <Twitter size={20} strokeWidth={1.5} />,
      path: "https://twitter.com/hmif_ftumj",
    },
    {
      title: "hmif_ftumj",
      icon: <Github size={20} strokeWidth={1.5} />,
      path: "https://github.com/hmifft-umj",
    },
    {
      title: "HMIF BEM FT-UMJ",
      icon: <Youtube size={20} strokeWidth={1.5} />,
      path: "https://www.youtube.com/channel/UCeDkRG4BrbKME3N5rG3xyYQ",
    },
    {
      title: "HMIF BEM FT-UMJ",
      icon: <Linkedin size={20} strokeWidth={1.5} />,
      path: "https://id.linkedin.com/in/hmifbemftumj",
    },
  ];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    });
  }, []);
  return (
    <footer className="mt-auto font-general-sans">
      <motion.div
        style={{
          backgroundImage,
        }}
        className="grid grid-cols-1 gap-4 overflow-hidden md:grid-cols-2 min-h-dvh"
      >
        <div className="flex flex-col gap-8 p-8 m-1 md:p-12 lg:p-16 bg-card rounded-2xl">
          <h1 className="text-3xl font-general-sans md:text-5xl">Lokasi :</h1>
          <motion.iframe
            viewport={{ once: true }}
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
            }}
            style={{ transition: "all 1.5s" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6907167473496!2d106.8699661745305!3d-6.172148960482876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f502482aca31%3A0x442225dc43c344ca!2sFakultas%20Teknik%20Universitas%20Muhammadiyah%20Jakarta!5e0!3m2!1sid!2sid!4v1718475195601!5m2!1sid!2sid"
            className="border-8 border-primary rounded-2xl"
            height={"450px"}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="text-justify font-general-sans">
            Fakultas Teknik Universitas Muhammadiyah Jakarta Gedung D Lt.1-3,
            Jalan Cempaka Putih Tengah XXVII, Cempaka Putih, RT.11/RW.5, Cemp.
            Putih Tim., Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus
            Ibukota Jakarta 10510
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-8 p-8">
          {data.map((item, id) => (
            <motion.a
              key={id}
              href={item.path}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="flex items-center justify-center w-full py-4 text-center border-2 cursor-pointer rounded-2xl bg-primary border-card text-card hover:bg-card hover:text-primary"
              target="_blank"
              viewport={{ once: true }}
              initial={{
                x: "100%",
              }}
              whileInView={{
                x: 0,
              }}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-md sm:text-lg md:text-xl"
              >
                {item.icon}
                {item.title}
              </motion.h1>
            </motion.a>
          ))}
        </div>
      </motion.div>
      <div className="flex items-center justify-center w-full p-4 text-center border-t-2 border-card text-card">
        © Copyright HMIF BEM FT-UMJ PERIODE 2023-2024.
      </div>
    </footer>
  );
};

export default Footer;
