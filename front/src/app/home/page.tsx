import { Tiro_Devanagari_Sanskrit } from "next/font/google";
import Image from "next/image";
import homePod from "../../../public/images/homepod-.png";
import TopProducts from "@/components/TopProducts/TopProducts";
import Newslatter from "@/components/Newslatter/Newslatter";
import Publicity from "@/components/Publicity/Publicity";
import SectionVideos from "./sectionVideos";
import Video from "./sectionVideos";
import Video2 from "@/components/Publicity/video";

const TiroDevanagariSanskrit = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["latin"],
});

const Home: React.FC = () => {
  return (
    <div>
      <div className="w-4/6  pt-9 pl-9 relative max-sm:p-1">
        <h2
          className="text-6xl font-bold p-6 z-20 w-3/4 max-sm:text-2xl "
          style={{ fontFamily: TiroDevanagariSanskrit.className }}
        >
          Lo último en tecnología para vos.
        </h2>
      </div>
      <div className="w-full pl-12 z-50 max-sm:pl-1">
        <div className="w-2/6 p-6 text-2xl font-semibold max-lg:w-5/6 max-sm:p-3 max-sm:text-lg max-sm:w-full z-50">
          Shop es un e-commerce que lleva más de una década en el mercado
          acompañándote en todas las etapas de la vida.
        </div>
        <button className="w-32 mt-5 ml-6 bg-orange hover:bg-orangeFull text-black font-bold py-2 px-4 rounded-xl ">
          Explorar
        </button>
      </div>

      <div className="bg-blue w-3/6 h-500 absolute top-0 right-0 max-md:h-52 max-lg:h-96 z-0 "></div>
      <div className="">
        <Image
          src={homePod}
          alt="home"
          className="object-cover absolute right-0 top-24 z-10 w-2/4 animate-descender"
        />
      </div>

      <TopProducts />
      <Video2 />
      <Publicity />
      <Video />
      <Newslatter />
    </div>
  );
};

export default Home;
