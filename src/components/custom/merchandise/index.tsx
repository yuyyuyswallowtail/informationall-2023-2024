import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import {
  buynana,
  ganci,
  kaosAi,
  kaosInforall,
  kaosRpl,
  paket1,
  paket2,
  paket3,
  sticker,
} from "@/utils/imagesPath";
import { Loader2, MoveLeft, MoveRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import ZoomImage from "@/utils/ZoomImage";
import Linkify from "linkify-react";

type DataType = {
  title: string;
  image: string;
};

const description =
  "Assalamu'alaikum Warahmatullahi Wabarakatuh\n\nHimpunan Mahasiswa Teknik Informatika\nBadan Eksekutif Mahasiswa\nFakultas Teknik\nUniversitas Muhammadiyah Jakarta.\n\nMerchandise dan Snack INFORMATIONALL datang untuk beberapa paket yang dapat disesuaikan dengan kantong kamu! Berikut Barang dan Makanan yang bisa kamu miliki sesuka kamu dengan harga yang terjangkau loh!🙆\nBerikut barang-barang yang bisa kamu dapatkan 🔥 :\n\n1. Kaos 90K / Pcs\n2. Key Chans 13K / Pcs\n3. Stiker 10K / 5Pcs\n4. Buynana 10K / Pcs\n\nDan juga terdapat beberapa paket yang buat kantong kamu tetap aman loh!\nBerikut rincian paketnya :\n\nPaket 1 :\n- Kaos + Buynana = 95K\nPaket 2 :\n- Kaos + Stiker = 95K\nPaket 3 :\n- Kaos + Stiker + Gantungan Kunci = 110K\n\nYuk segera order! OPEN PRE ORDER tersedia mulai 03 - 16 Juni 2024.\n\nSelengkapnya bisa hubungi narahubung dibawah ini yaa....\n\nInstagram : hmif_ftumj\nWhatsApp :\n- https://wa.me/6282180598494 ( AJI )\n- https://wa.me/6285776608981 ( IHSAN )\n- https://wa.me/6285789032895 ( GEMA )\n\nPembayaran dapat melalui :\nBCA : 0571260149 a.n. Irfan Pandu Aji\nOVO : 0821-8059-8494 a.n. Irfan Pandu Aji\n\nTerima kasih atas Perhatiannya, Salam Teknologi !!!\n\n#SALAMTEKNOLOGI\n#HMIFJAYA\n#INFORMATIONALLSTORE\n#INFORMATIONALL\n\nDepartemen Ilmu Pengetahuan & Teknologi\n_____________________________________\n\n©Departemen Komunikasi & Informasi";

const link = "https://forms.gle/uUqy3f8bshS3GqFWA";

const data: DataType[] = [
  {
    title: "T-Shirt RPL",
    image: kaosRpl,
  },
  {
    title: "T-Shirt AI",
    image: kaosAi,
  },
  {
    title: "T-Shirt Informationall",
    image: kaosInforall,
  },
  {
    title: "Sticker",
    image: sticker,
  },
  {
    title: "Gantungan Kunci",
    image: ganci,
  },
  {
    title: "Buynana Chips",
    image: buynana,
  },
  {
    title: "Package 1",
    image: paket1,
  },
  {
    title: "Package 2",
    image: paket2,
  },
  {
    title: "Package 3",
    image: paket3,
  },
];

const Merchandise = () => {
  const [activeData, setActiveData] = useState<DataType>(data[0]);
  const [indexData, setIndexData] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setActiveData(data[indexData]);
    setLoading(false);
  }, [indexData]);

  if (loading) {
    return (
      <section className="flex items-center justify-center w-full gap-1 p-1 min-h-dvh ">
        <h1 className="flex items-center text-3xl font-general-sans text-card">
          Loading <Loader2 className="ml-2 animate-spin" />
        </h1>
      </section>
    );
  }
  return (
    <section className="relative flex flex-col w-full p-1 overflow-hidden bg-card">
      <div className="grid items-start justify-center w-full grid-cols-1 lg:grid-cols-2">
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
          className="flex items-center justify-center w-full h-full"
        >
          <div className="relative flex items-center justify-center w-full">
            <ZoomImage>
              <LazyLoadImage
                effect="blur"
                src={activeData.image}
                alt={activeData.image}
                className="z-40 w-full h-auto"
              />
            </ZoomImage>
            <div className="absolute left-0 z-50 flex items-center justify-between w-full px-2 top-1/2">
              <button
                className="p-4 border-2 rounded-full bg-primary text-card border-card"
                onClick={() => {
                  const dataLength = data.length - 1;
                  if (indexData === 0) {
                    setIndexData(dataLength);
                  } else {
                    setIndexData(indexData - 1);
                  }
                }}
              >
                <MoveLeft strokeWidth={1.5} />
              </button>
              <button
                className="p-4 border-2 rounded-full bg-primary text-card border-card"
                onClick={() => {
                  const dataLength = data.length - 1;
                  if (indexData === dataLength) {
                    setIndexData(0);
                  } else {
                    setIndexData(indexData + 1);
                  }
                }}
              >
                <MoveRight strokeWidth={1.5} />
              </button>
            </div>
          </div>
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
          className="flex flex-col w-full gap-4 p-8 -my-1"
        >
          <h1 className="text-5xl font-general-sans">{activeData.title}</h1>
          <h2 className="text-3xl font-general-sans">Merchandise & Snack</h2>
          <div className="overflow-auto font-general-sans pe-8 max-h-[75vh]">
            <Linkify>
              {description.split("\n").map((line, index) => (
                <div key={index} className="break-words">
                  {line}
                  <br />
                </div>
              ))}
            </Linkify>
          </div>
          <motion.a
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="w-auto px-2 py-3 mt-auto text-center border-2 cursor-pointer border-primary rounded-2xl hover:border-card hover:text-card hover:bg-primary bg-card"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Link Pembelian
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Merchandise;
