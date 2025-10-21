import { Link } from 'react-router-dom';
import './ProjectCard.scss';
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

function ProjectCard({ image, title, description, languages, link }) {
  return (
    <Link to={link} className="project-card">
      <img src={image} alt={title} className="project-card__img" />
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="project-card__tags">
          {languages.map((lang, index) => (
            <li key={index}>{iconMap[lang]}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default ProjectCard;
