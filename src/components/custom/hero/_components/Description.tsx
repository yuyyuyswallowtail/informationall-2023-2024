import { heroImage } from "@/utils/imagesPath";

const Description = () => {
  return (
    <div className="relative flex flex-col justify-center w-full gap-8 py-8 overflow-hidden border-2 bg-card rounded-2xl box-shadow border-card">
      <h1 className="text-4xl text-center md:text-5xl lg:text-7xl font-general-sans">
        INFORMATIONALL
      </h1>
      <div className="px-8 my-6 scale-110 md:px-12 lg:px-16 bg-primary min-h-56">
        <img
          src={heroImage}
          alt={heroImage}
          className="absolute z-10 w-full h-auto rotate-[180deg] -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 rounded-3xl drop-shadow-2xl"
        />
      </div>
      <h1 className="text-4xl text-center md:text-5xl font-general-sans">
        Explore Trends And Innovation <br />
        In Developer World!
      </h1>
    </div>
  );
};

export default Description;
