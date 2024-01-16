import Card from "../../components/Card";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <Image
          src={project.imageId}
          alt="Portfolio Project Image"
          height="150"
          width="300"
        />

      </div>
      <h4>{project.title}</h4>
      <p>
        {project.hasOwnProperty("description")
          ? project.description
          : project.desc}
      </p>
      <div className="portfolio__project-cta">
        {project?.projectLink && <a
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
        </a>}
        {project?.githubLink && <a
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
        </a>}
      </div>
    </Card>
  );
};

export default Project;
