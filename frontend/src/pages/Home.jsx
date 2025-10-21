import Banner from '../components/Banner/Banner';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import projet1Img from '../assets/projet1.png';
import projet2Img from '../assets/projet2.png';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <>
      <Banner />
      <section id="projects-section" className="home-projects">
        <h2>Mes projets récents</h2>
        <div className="home-projects__grid">
          <ProjectCard
            image={projet1Img}
            title="Kasa"
            description="Une application web moderne créée avec React."
            languages={['React', 'Sass', 'Vite']}
            link="/projects#kasa"
          />
          <ProjectCard
            image={projet2Img}
            title="Mon Vieux Grimoire"
            description="Réalisation du backend permettant la gestion sécurisée des données et des opérations CRUD."
            languages={['Node', 'Express', 'MongoDB']}
            link="/projects#grimoire"
          />
        </div>
        <div className="home-projects__link">
          <Link to="/projects">Voir les projets</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
