import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { posterWebinar, posterWorkshop } from "@/utils/imagesPath";
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
    title: "Mastering Website Creation, Innovation, And Deployment",
    category: "Workshop",
    image: posterWorkshop,
    description:
      "Assalamu'alaikum Warahmatullahi Wabarakatuh\n\nHimpunan Mahasiswa\nTeknik Informatika\nBadan Eksekutif Mahasiswa\nFakultas Teknik\nUniversitas Muhammadiyah Jakarta.\n\nProudly Presents :\n📣✨INFORMATIONALL 2024✨📣\n\n[ MAIN EVENT ]\n\n🧑🏼‍💻 Workshop 👨🏼‍💻\n\nTema : Mastering Website Creation, Innovation, And Deployment\n\nMemberikan pemahaman dasar dan konsep implementasi Front End kepada peserta untuk mempersiapkan prospek karir memasuki sektor industri teknologi sebagai Front End Developer dalam membuat website sesuai tren\n\n🎙Narasumber :\n👨🏻‍💻Malvin Valerian Gultom👨🏻‍💻\n\nKegiatan ini akan diselenggarakan pada :\n\n📌 Hari : Sabtu\n📅 Tanggal : 22 Juni 2024\n🕒 Pukul : 08.30 - 15.35\n📌 Tempat : Aula Djoeanda FT UMJ\nhttps://maps.app.goo.gl/pGnCwKwX7KcqhFqg9\n\n💳 Benefit :\n🔰 E-Sertifikat untuk peserta\n🔰 Ilmu & Wawasan\n🔰 Codingan website dan modul\n🔰 Doorprize untuk peserta terbaik\n\n🗂 Pendaftaran :\n4 Juni - 19 Juni 2024 (Online)\n\n💰 Gratis Biaya Pendaftaran!!!\n(Dengan syarat diwajibkan mengirim broadcast beserta poster minimal ke 3 grup)\n\n⚠Kuota Terbatas⚠\n\nYuk buruan daftar‼\n\n✨Yuk, upload twibbon acara INFORMATIONALL di akun instagram kamu sebagai bentuk dukungan dalam acara ini✨\n\n🔗 Link twibbon : https://twb.nz/informationall\n\n🔗 Link caption twibbon :\nhttps://docs.google.com/document/d/1IfJKr_Ab59RphQ5oaXY63ADj61aiyZvXyJ9rdSZEVUE/edit?usp=sharing\n\n⚠Informasi Tambahan :\nHarap diperhatikan bahwa para peserta diwajibkan membawa laptop untuk mengikuti kegiatan workshop. Terima kasih atas perhatian dan kerja samanya.\n\nUntuk Info Lebih Lanjut :\n\nContact Person\n👤 0813-8353-5748 (Muhammad Daffa)\n👤 0813-8816-2433 (Zaky Yusuf)\n👤 0821-1171-0709 (Bintang)\n\nInstagram : @hmif_ftumj\n\nWassalamu’alaikum Warahmatullahi Wabarakatuh\n\n#SALAMTEKNOLOGI\n#HMIFJAYA\n#INFORMATIONALL\n\nDepartemen Ilmu Pengetahuan & Teknologi\n_____________________________________\n\n©Departemen Komunikasi & Informasi",
    link: "https://forms.gle/MiL4H3rRAGwrE2RZ6",
  },
  {
    title: "Can a Web Developer Be Replaced by AI",
    category: "Webinar",
    image: posterWebinar,
    description: `Assalamu'alaikum Warahmatullahi Wabarakatuh\n\nHimpunan Mahasiswa Teknik Informatika\nBadan Eksekutif Mahasiswa\nFakultas Teknik\nUniversitas Muhammadiyah Jakarta.\n\n📢 [WEBINAR DEVELOPER INFORMATIONALL] - Menjadi Developer Handal di Era Digital 📢\n\nHalo, Developer dan Calon Developer!\n\nKami dengan bangga mengundang Anda untuk mengikuti webinar eksklusif kami yang akan membantu Anda meningkatkan keterampilan dan pengetahuan di bidang pengembangan perangkat lunak. Jangan lewatkan kesempatan emas ini untuk belajar langsung dari para ahli dan profesional terkemuka di industri!\n\n🗓 Tanggal: Sabtu, 29 Juni 2024\n🕒 Waktu: 09.00 - 12.20 WIB\n💻 Platform: Zoom (link akan diberikan di group WhatsApp setelah registrasi)\n\nTema: "Can a Web-Developer Can Be Replace By AI"\n\nAgenda Webinar:\n\nPembukaan dan Perkenalan Mengenai Tren Terbaru Dalam Dunia Developer!!!\nPembicara : Chandra Bagas Pambudi, S.Kom !!\n\nKenapa Anda Harus Ikut?\n\nPembicara Terpercaya: Mendengar langsung dari para pakar di bidangnya.\nMateri Berkualitas: Konten yang relevan dengan tren terbaru dan kebutuhan industri.\nKesempatan Networking: Terhubung dengan sesama developer dan profesional IT lainnya.\n\nCara Mendaftar:\n\nIsi formulir pendaftaran dengan lengkap.\nCek email Anda untuk konfirmasi dan link Zoom webinar.\n\nJangan lewatkan kesempatan ini! Daftar sekarang dan tingkatkan kemampuan Anda menjadi developer yang lebih handal dan kompetitif di era digital!\n\nKontak Kami:\n+62 895-3230-50643 (Idelia Fitri Kyla)\n+62 857-1537-9788 (Indri Surya Ningsih)\n+62 812-1868-8306 (Muhammad Taqi Wijdan)\n+62 821-1171-0709 (Bintang Al Fizar)\n\nInstagram : hmif_ftumj\nSampai jumpa di webinar! 🎉\n\nWassalamu’alaikum Warahmatullahi Wabarakatuh\n\n#SALAMTEKNOLOGI\n#HMIFJAYA\n#INFORMATIONALL\n\nDepartemen Ilmu Pengetahuan & Teknologi\n_____________________________________\n\n©Departemen Komunikasi & Informasi`,
    link: "https://forms.gle/45hWUPPR9WuNCKsA6",
  },
];

const WebinarAndWorkshop = () => {
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
            x: "100%",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          style={{ transition: "all 1s" }}
          className="flex items-center w-full h-full border-2 justify-centr rounded-2xl border-card"
        >
          <div className="container relative z-30 flex items-center justify-center w-full overflow-hidden">
            <ZoomImage>
              <LazyLoadImage
                effect="blur"
                src={activeData.image}
                alt={activeData.image}
                className="z-10 flex w-screen h-auto p-2"
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
          className="z-30 flex flex-col w-full min-h-screen gap-4 p-8 rounded-2xl bg-card"
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

export default WebinarAndWorkshop;
