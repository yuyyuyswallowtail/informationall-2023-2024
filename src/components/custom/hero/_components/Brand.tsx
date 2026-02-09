import "../hero.css";
import { motion } from "framer-motion";
import { dawnLight, explosion } from "@/utils/imagesPath";

const Brand = () => {
  return (
    <div className="w-full border-2 min-h-[650px] md:min-h-dvh rounded-2xl hero-brand-background border-card text-card">
      <div className="absolute top-0 left-0 p-3 break-words whitespace-pre-wrap">
        <h1 className="text-5xl font-general-sans w-[80%] lg:w-full">
          INFORMATIONALL
        </h1>
        <p className="py-4 text-justify w-[80%]">
          INFORMATIONALL merupakan kombinasi dari dua kata yang berasal dari
          Bahasa Inggris “INFORMATION” mewakili kata ‘Informasi’ dan merupakan
          representasi dari Program Studi Teknik Informatika dan untuk “ALL”
          yang dimaksudkan sebagai sebuah kegiatan yang terbuka untuk semua
          kalangan baik akademisi maupun umum dengan tetap mempertimbangkan
          korelasinya dengan dunia pendidikan khususnya di tingkat perguruan
          tinggi.
        </p>
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={explosion} alt={explosion} />
      </div>
      <div className="absolute bottom-0 right-0 p-4 m-4 rounded-full bg-card">
        <motion.img
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-auto max-w-32"
          src={dawnLight}
        />
      </div>
    </div>
  );
};

export default Brand;
