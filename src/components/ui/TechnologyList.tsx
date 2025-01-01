type TechnologyListProps = {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
};

const TechnologyList = ({ title, icon, technologies }: TechnologyListProps) => {
  return (
    <div className="flex-1 backdrop-blur-md bg-white/10 p-8 rounded-xl border border-white/20 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-[#439BE6]">{icon}</div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      <ul className="space-y-3">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-center gap-2 text-lg">
            <span className="w-2 h-2 bg-[#439BE6] rounded-full"></span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyList;
