import './ProjectDetail.scss';
import {
  SiReact,
  SiSass,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const iconMap = {
  React: <SiReact />,
  Sass: <SiSass />,
  Vite: <SiVite />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  Node: <SiNodedotjs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
};

function ProjectDetail({ title, description, languages, images, github }) {
  return (
    <article className="project-detail">
      <div className="project-detail__media">
        <img src={images[0]} alt={title} />
      </div>

      <div className="project-detail__content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-detail__icons">
          {languages.map((lang, index) => (
            <span key={index} className="icon">
              {iconMap[lang]}
            </span>
          ))}
        </div>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-detail__github"
          >
            <FaGithub /> Voir sur GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectDetail;
