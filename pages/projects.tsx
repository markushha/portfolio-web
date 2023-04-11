import Navbar from "@/app/components/Navbar";
import Project from "@/app/components/Project";
import Meta from "@/app/utils/Meta";

interface Props {}

function Projects(props: Props) {
  const {} = props

  const projects = [
    {
      title: "Home Link",
      description: "Home Link - is an axis incident-manager website. All complex residents can view all stuff contacts and send an application if something was broken online.",
      tech: ["react", "nextjs", "js", "mongodb", "tailwind", "git"],
      image: "/home-link.svg",
      links: ["https://home-link.vercel.app/", "https://github.com/markushha/Home-Link"],
      index: 0
    },
    {
      title: "E-Commerce Web App",
      description: "A simple React e-commerce web app with a shopping cart and realized search bar & filters. I made it in 24 hours for a job interview.",
      tech: ["react", "js", "tailwind", "scss" ,"git"],
      image: "/e-commerce.svg",
      links: ["https://starfund-e-commerce.vercel.app/", "https://github.com/markushha/E-Commerce-Web"],
      index: 1
    }
  ]

  return (
    <>
      <div className="container">
        <Meta title="My Projects" />
        <Navbar />
      </div>
      <div className="container">
        <div className="project-head">
        <h1 className="projects-h1">My Projects</h1>
        </div>
      </div>
      <div className="container">
        <div className="project-container">
        {projects.map((project) => {
          return <Project key={project.index} project={project} />
        })}
        </div>
        <div className="circle-blur" id="circle-proj-1"/>
      </div>
    </>
  )
}

export default Projects
