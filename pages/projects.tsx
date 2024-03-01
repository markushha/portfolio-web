import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Project from "@/app/components/Project";
import Meta from "@/app/utils/Meta";

function Projects() {
  const projects = [
    {
      title: "Pleep",
      description:
        "Pleep is a No-Code AI-powered applications builder. Automate your back-office tasks with the power of LLM and focus on what really matters.",
      tech: ["nextjs", "ts", "tailwind", "vercel"],
      image: "/pleep.png",
      links: ["https://pleep.app/"],
      index: 0,
    },
    {
      title: "X-Desire",
      description:
        "X-Desire is an open-source project that helps to research sediments using NASA Earth Data. We offer great visualization using maps and data analysis tools. Built within NASA Space Apps Challenge 2023.",
      tech: ["nextjs", "ts", "tailwind", "git", "vercel"],
      image: "/x-desire.png",
      links: [
        "https://x-desire.vercel.app/",
        "https://github.com/markushha/x-desire",
      ],
      index: 0,
    },
    {
      title: "Jumify",
      description:
        "Jumify is an online-recruitment platform that connects startups with experience-free students. We offer a great way to find a job and get experience.",
      tech: ["react", "ts", "tailwind"],
      image: "/jumify.png",
      links: ["https://jumify.kz/"],
      index: 0,
    },
    {
      title: "Climatify",
      description:
        "Climatify is an open-source project that helps to raise awareness about environmental issues in Almaty. We offer real-time air quality data and AI assistant trained to help you understand all why's and how's. Built withing ASMS Climate AI Hackathon 2023.",
      tech: ["nextjs", "ts", "tailwind", "git", "vercel"],
      image: "/climatify.png",
      links: [
        "https://climate.jumify.kz/",
        "https://github.com/markushha/climatify",
      ],
      index: 0,
    },
    {
      title: "Home Link",
      description:
        "Home Link - is an axis incident-manager website. All complex residents can view all stuff contacts and send an application if something was broken online",
      tech: ["react", "nextjs", "js", "mongodb", "tailwind", "git"],
      image: "/home-link.svg",
      links: [
        "https://home-link.vercel.app/",
        "https://github.com/markushha/Home-Link",
      ],
      index: 0,
    },
  ];

  return (
    <>
      <div className="container">
        <Meta title="My Projects" />
        <Navbar />
      </div>
      <div className="container">
        <div className="project-head">
          <h1 className="projects-h1">Best projects</h1>
        </div>
      </div>
      <div className="container">
        <div className="project-container">
          {projects.map((project) => {
            return <Project key={project.index} project={project} />;
          })}
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default Projects;
