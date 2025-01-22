import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/c--4.svg",
    label: "C# .NET",
    desc: "Back-End Language",
  },
  {
    imgSrc: "/images/github-icon-2.svg",
    label: "GitHub",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/lua-5.svg",
    label: "Lua",
    desc: "Game Development",
  },
  {
    imgSrc: "/images/python-5.svg",
    label: "Python",
    desc: "Scripting",
  },
  {
    imgSrc: "/images/bash-2.svg",
    label: "Bash",
    desc: "Command Line Interface",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "Tailwind CSS",
    desc: "CSS Framework",
  },

  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Front-End Language",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Front-End Framework",
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
