import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/translator-app.png",
    title: "Translator Desktop App",
    tags: ["API", "MVC", "WPF"],
    projectLink: "https://github.com/CInkvader/Finals_Translator",
  },
  {
    imgSrc: "/images/pet-shop.png",
    title: "Pet Shop",
    tags: ["WPF", "MVC"],
    projectLink: "https://github.com/WideBirb/IntegrativeMidterm",
  },
  {
    imgSrc: "/images/movie-app.png",
    title: "Movie App",
    tags: ["API", "React"],
    projectLink: "https://github.com/WideBirb/react_prac",
  }
];

const Work = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-2">PROJECTS</h2>
        <p className="text-zinc-400 mt-3 mb-3 max-w-[200ch]">
        Personal projects that showcase my problem-solving skills. Explore my GitHub to see what I've been working on!
        </p>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
