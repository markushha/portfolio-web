import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

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
      <div className="project-img-wrapper">
        <Image
          className="project-img"
          src={image}
          alt={`${title} image`}
          width={759}
          height={368}
        />
      </div>

      <div className="project-details clean-z">
        <div className="project-details-title">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
        </div>
        <div className="project-tech-wrapper">
          <p className="project-tech-title">Tech Stack</p>
          <div className="project-tech">
            {tech.map((tech) => {
              return (
                <div className="project-tech-item" key={index}>
                  <Image
                    className="project-icon"
                    width={50}
                    height={50}
                    src={`/icons/${tech}.svg`}
                    alt={`${tech} icon`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="project-demo">
        <div className="project-links">
          <a className="clean-z" href={links[0]} target="_blank">
            <div className="project-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="proj-svg h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>

              <p className="links-title">Check it out</p>
            </div>
          </a>

          {links[1] && (
            <a className="clean-z" href={links[1]} target="_blank">
              <div className="project-link link-img">
                <AiFillGithub className="proj-svg h-6 w-6" />
                <p className="links-title">Visit Repo</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
