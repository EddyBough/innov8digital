type TechnologyCardProps = {
  name: string;
  image: string;
};

const TechnologyCard = ({ name, image }: TechnologyCardProps) => {
  return (
    <div className=" bg-white/70 lg:bg-white/90 rounded-2xl border border-white/20 shadow-xl overflow-hidden group hover:scale-105 transition-transform w-full h-[200px] md:h-[250px]">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain"
        />
        <h3 className="absolute bottom-1 left-4 text-lg text-black font-semibold">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default TechnologyCard;
