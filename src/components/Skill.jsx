import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Technologies</h2>
        <p className="text-zinc-400 mt-3 mb-4 max-w-[50ch]">
          Tools and technologies I use to create my projects
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={import.meta.env.BASE_URL + imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
