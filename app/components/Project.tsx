import Image from "next/image";

interface Props {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    links: string[];
    index: number;
  };
}

function Project(props: Props) {
  const { title, description, tech, image, links, index } = props.project;

  return (
    <div className="project-wrapper">
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((tech) => {
            return (
              <div className="project-tech-item" key={index}>
                <i className={tech} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="project-demo">
        <Image
          className="project-img"
          src={image}
          alt={`${title} image`}
          width={1600}
          height={900}
        />
        <div className="project-links">
          <a href={links[0]} target="_blank">
            <div className="project-link">
              <i className="devicon-webpack-plain"></i>
              <p className="links-title">View Demo</p>
            </div>
          </a>

          <a href={links[1]} target="_blank">
            <div className="project-link">
              <i className="devicon-github-original"></i>
              <p className="links-title">Visit Repo</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
