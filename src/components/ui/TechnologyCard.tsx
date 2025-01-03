import Img from "next/image";
type TechnologyCardProps = {
  name: string;
  image: string;
};

const TechnologyCard = ({ name, image }: TechnologyCardProps) => {
  return (
    <div className=" bg-white/70 lg:bg-white/90 rounded-2xl border border-white/20 shadow-xl overflow-hidden group hover:scale-105 transition-transform w-full h-[200px] md:h-[250px]">
      <div className="relative w-full h-full flex items-center justify-center">
        <Img
          src={image}
          alt={name}
          width={80}
          height={80}
          className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] object-contain"
        />
        <h4 className="absolute bottom-1 left-4 text-lg text-black font-aeonik">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default TechnologyCard;
