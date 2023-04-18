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
    <div className="project-wrapper clean-z">
      <div className="project-details clean-z">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((tech) => {
            return (
              <div className="project-tech-item" key={index}>
                <Image className="project-icon" width={50} height={50} src={`/icons/${tech}.svg`} alt={`${tech} icon`}/>
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
          width={759}
          height={368}
        />
        <div className="project-links">
          <a className="clean-z" href={links[0]} target="_blank">
            <div className="project-link">
              <Image className="clean-z link-img" src="/icons/vercel.svg" alt="vercel icon" width={35} height={35} />
              <p className="links-title">View Demo</p>
            </div>
          </a>

          <a className="clean-z" href={links[1]} target="_blank">
            <div className="project-link">
              <Image className="clean-z link-img" src="/icons/github.svg" alt="github icon" width={35} height={35} />
              <p className="links-title">Visit Repo</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
