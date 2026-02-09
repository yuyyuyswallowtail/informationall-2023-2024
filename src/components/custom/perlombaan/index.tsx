import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { posterEsport, posterFEWDC, posterPB } from "@/utils/imagesPath";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Linkify from "linkify-react";
import ZoomImage from "@/utils/ZoomImage";

type DataType = {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

const data: DataType[] = [
  {
    title: "E-SPORT MOBILE LEGENDS",
    category: "E-Sport",
    image: posterEsport,
    description: `Assalamu'alaikum Warahmatullahi Wabarakatuh\n\nHimpunan Mahasiswa Teknik Informatika\nBadan Eksekutif Mahasiswa\nFakultas Teknik\nUniversitas Muhammadiyah Jakarta.\n\n🏆 E-SPORT MOBILE LEGENDS INFORMATIONALL 🏆\n\nHalo para gamer sejati!\n\nKami mengundang Anda untuk bergabung dalam pertarungan epik di Lomba Mobile Legends kami yang akan datang. Tunjukkan keahlian Anda dan bersaing untuk menjadi yang terbaik!\n\n🎮 Detail Lomba:\nPenyisihan :\nTanggal: 23 dan 30 Juni 2024\nWaktu: 09.30 – 16.00 WIB\nFormat: 5v5, Pertandingan Online\nFinal :\nTanggal : 6 Juli 2024\nWaktu: 09.30 – 16.00 WIB\nFormat: 5v5, Pertandingan Online\n\n🏅 Hadiah:\nJuara 1 : Uang + E-Sertifikat\nJuara 2 : Uang + E-Sertifikat\nJuara 3 : Uang + E-Sertifikat\nHarapan 1 : E-Sertifikat\n\nBatas Waktu Pendaftaran: 22 Juni 2024\nBiaya Pendaftaran : 45k per tim (Regist 2 slot 80k)\n Pertandingan:\nAkan diadakan secara online dan diawasi oleh panitia pelaksana.\n\n📢 Pengumuman Pemenang:\nPengumuman juara pemenang akan dilakukan pada 6 Juli 2024.\n\nHubungi kontak di bawah ini untuk informasi lebih lanjut:\n- Muhammad Hably : 089652010342\n- Naufal Fakhriza : 082123610137\n- Bintang Al Fizar : 082111710709\n\nJangan lewatkan kesempatan untuk menunjukkan kemampuan Anda dan memenangkan hadiah menarik! Daftarkan tim Anda sekarang juga!\n\nWassalamu’alaikum Warahmatullahi Wabarakatuh\n\n#SALAMTEKNOLOGI\n#HMIFJAYA\n#INFORMATIONALL\n\nDepartemen Ilmu Pengetahuan & Teknologi\n_____________________________________\n\n©Departemen Komunikasi & Informasi
`,
    link: "https://forms.gle/EDY5vdZH7Eo9N7Vw6",
  },
  {
    title: "KOMPETISI FRONT END WEB DEVELOPER",
    category: "Front End Web Developer Competition",
    image: posterFEWDC,
    description: `Assalamu'alaikum Warahmatullahi Wabarakatuh\n\nHimpunan Mahasiswa Teknik Informatika\nBadan Eksekutif Mahasiswa\nFakultas Teknik\nUniversitas Muhammadiyah Jakarta.\n\n🌐 PENGUMUMAN KOMPETISI FRONT END WEB DEVELOPER 🌐\n\nHai para pengembang web!\n\nKami mengundang Anda untuk menunjukkan kreativitas dan keahlian coding Anda dalam Kompetisi Front End Web Developer kami. Ini adalah kesempatan Anda untuk berkompetisi dengan para developer terbaik dan memamerkan proyek Anda!\n\n🖥 Detail Kompetisi :\n- Babak Penyisihan : Tanggal : 27 Juni 2024\n- Tema : “Explore Trends and Innovation In Developer World”\n- Final FEWDC : Tanggal : 6 Juli 2024\n- Platform : Via Zoom Conference\n\n🏆 Hadiah :\nJuara 1 : Uang + E-Sertifikat\nJuara 2 : Uang + E-Sertifikat\nJuara 3 : Uang + E-Sertifikat\nE-Sertifikat untuk semua Tim\n\nBatas Waktu Pendaftaran : 27 Juni 2024 Pukul 23.59\nBiaya Pendaftaran : Rp.75.000 per tim\n\n🔍 Technical Meeting Finalis :\nTanggal : 30 Juni 2024\nPlatform : Via Zoom Meeting\n\n🖌 Submisi Proyek :\nKirimkan proyek Anda sebelum 27 Juni 2024 pukul 23.59 WIB\n\n📢 Pengumuman Pemenang:\nPengumuman pemenang akan dilakukan pada 6 Juli 2024.\n\n📝Hubungi kontak di bawah ini untuk informasi lebih lanjut:\n- Reihan Aditya 081294937616\n- Agung Firmansyah 083895742866\n- Bintang Al Fizar 082111710709\n\nBersiaplah untuk mengasah skill Anda dan mungkin Anda akan menjadi juara selanjutnya! Daftarkan diri Anda sekarang juga!\n\nWassalamu’alaikum Warahmatullahi Wabarakatuh\n\n#SALAMTEKNOLOGI\n#HMIFJAYA\n#INFORMATIONALL\n\nDepartemen Ilmu Pengetahuan & Teknologi\n_____________________________________\n\n©Departemen Komunikasi & Informasi
`,
    link: "https://forms.gle/BTebx2hzkqqZ4MQt8",
  },
  {
    title: "PROGRAMMING BATTLE",
    category: "Programming Battle",
    image: posterPB,
    description: `Assalamu'alaikum Warahmatullahi Wabarakatuh\n\nHimpunan Mahasiswa Teknik Informatika\nBadan Eksekutif Mahasiswa\nFakultas Teknik\nUniversitas Muhammadiyah Jakarta.\n\n🚀 PENGUMUMAN PROGRAMMING BATTLE 🚀\n\nHalo para coder yang bersemangat!\n\nKami mengundang Anda untuk berpartisipasi dalam Programming Battle kami yang mendebarkan. Ini adalah kesempatan Anda untuk menunjukkan keahlian pemrograman dan berkompetisi dengan para programmer yang lain!\n\n👨‍💻 Detail Lomba\nTanggal: 30 Juni 2024\nWaktu: 13.00 WIB s.d Selesai\nTantangan: Berbagai soal pemrograman yang menantang dengan bahasa pemrograman C/C++/Java.\n\n🏅 Hadiah\nJuara 1: Uang + E-Sertifikat\nJuara 2: Uang + E-Sertifikat\nJuara 3: Uang + E-Sertifikat\nE-Sertifikat untuk seluruh peserta\n\n📝 Pendaftaran\nBatas Waktu Pendaftaran: 28 Juni 2024\nBiaya Pendaftaran: Rp.20.000\n\n🔧 Technical Meeting\nTanggal: 29 Juni 2024\nPlatform: Discord\n\n💻 Pelaksanaan\nTanggal: 30 Juni 2024\nPlatform: Discord\n\n📢 Pengumuman Pemenang\n5 Juli 2024\n\n💡Untuk Info Lebih Lanjut:\n\n📱Contact Person\n👤0812-1390-6554 (Danu)\n👤0887-0779-2413 (Azizsyah)\n👤0821-1171-0709 (Bintang)\n\nSiapkan diri Anda untuk tantangan ini dan jadilah juara di dunia pemrograman! Daftarkan diri Anda sekarang juga!\n\nWassalamu’alaikum Warahmatullahi Wabarakatuh\n\n#SALAMTEKNOLOGI\n#HMIFJAYA\n#INFORMATIONALL\n\nDepartemen Ilmu Pengetahuan & Teknologi\n_____________________________________\n\n©Departemen Komunikasi & Informasi
`,
    link: "https://bit.ly/ProgrammingBattle",
  },
];

const Perlombaan = () => {
  const [activeData, setActiveData] = useState<DataType>(data[0]);
  const [indexData, setIndexData] = useState(0);

  useEffect(() => {
    setActiveData(data[indexData]);
  }, [indexData]);

  return (
    <section className="relative flex flex-col gap-1 p-1 overflow-hidden min-h-dvh">
      <div className="z-20 grid items-start justify-center w-full grid-cols-1 gap-1 lg:grid-cols-2">
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
          className="flex items-center justify-center order-1 w-full h-full border-2 rounded-2xl border-card md:order-2"
        >
          <div className="container relative z-30 flex justify-center w-full overflow-hidden">
            <ZoomImage>
              <LazyLoadImage
                effect="blur"
                src={activeData.image}
                alt={activeData.image}
                className="z-30 flex w-screen h-auto p-2"
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
            x: "-100%",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          style={{ transition: "all 1s" }}
          className="z-30 flex flex-col order-2 w-full min-h-screen gap-4 p-8 rounded-2xl bg-card md:order-1"
        >
          <h1 className="text-5xl font-general-sans">{activeData.title}</h1>
          <h2 className="text-3xl font-general-sans">{activeData.category}</h2>
          <div className="overflow-auto font-general-sans max-h-dvh pe-8">
            <Linkify>
              {activeData.description.split("\n").map((line, index) => (
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
            href={activeData.link}
            target="_blank"
            rel="noreferrer"
          >
            Link Pendaftaran
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Perlombaan;
