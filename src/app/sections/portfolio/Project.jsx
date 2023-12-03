import Card from "../../components/Card";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        {project.hasOwnProperty("imageId") ? (
          <CldImage
            src={project.imageId}
            alt="Portfolio Project Image"
            height={"200"}
            width="300"
          />
        ) : (
          <Image
            src={project.image}
            alt="Portfolio Project Image"
            height={"200"}
            width="300"
          />
        )}
      </div>
      <h4>{project.title}</h4>
      <p>
        {project.hasOwnProperty("description")
          ? project.description
          : project.desc}
      </p>
      <div className="portfolio__project-cta">
        <a
          href={
            project.hasOwnProperty("projectLink")
              ? project.projectLink
              : project.demo
          }
          className="btn sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={
            project.hasOwnProperty("githubLink")
              ? project.githubLink
              : project.demo
          }
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default Project;
