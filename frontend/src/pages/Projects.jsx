import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail.jsx';
import projet1Img from '../assets/projet1.png';
import projet2Img from '../assets/projet2.png';
import './Projects.scss';

function Projects() {
  const location = useLocation();

  const projects = [
    {
      id: 'kasa',
      title: 'Kasa',
      description: `Kasa est une application web simulant une plateforme de location d’hébergements entre particuliers, conçue pour offrir une interface fluide et responsive. Le projet avait pour objectif de créer des composants réutilisables à partir de maquettes Figma, tout en optimisant la navigation et la gestion des données locales. React a été utilisé pour la création des composants, React Router pour la navigation entre les pages et Sass pour le style responsive. Ce projet a permis de développer mes compétences en architecture front-end, intégration responsive et organisation de styles modulaires. L’application livrée est performante, fidèle aux maquettes et respecte les standards d’accessibilité. Pour améliorer encore l’expérience utilisateur, des optimisations comme l’intégration d’une API externe, l’ajout de tests unitaires et des animations légères pourraient être envisagées.`,
      languages: ['React', 'Sass', 'Vite', 'HTML', 'CSS', 'JavaScript'],
      images: [projet1Img],
      github: 'https://github.com/SamHbn/Kasa_Project',
    },
    {
      id: 'grimoire',
      title: 'Mon Vieux Grimoire',
      description: `Mon Vieux Grimoire est une application web permettant aux utilisateurs de publier, consulter et noter des ouvrages. Le projet a consisté à développer le backend complet pour gérer la logique serveur, la base de données et la sécurité des échanges. L’objectif était de créer une API REST sécurisée et performante, capable de gérer les opérations CRUD sur les livres et les utilisateurs tout en protégeant les données. Node.js et Express ont été utilisés pour le serveur, MongoDB et Mongoose pour la base de données, et Multer pour la gestion des fichiers. Ce projet a renforcé mes compétences en conception d’API, manipulation de base NoSQL et sécurisation des données utilisateur. L’API livrée est robuste, conforme aux spécifications et facilement connectable à un front-end React. Des améliorations futures pourraient inclure la pagination, des tests automatisés et un déploiement cloud pour rendre l’API accessible publiquement.`,
      languages: ['Node', 'Express', 'MongoDB', 'JavaScript', 'Nodemon'],
      images: [projet2Img],
      github: 'https://github.com/SamHbn/Mon_Vieux_Grimoire',
    },
  ];

  // Fait défiler vers le projet correspondant à l'ancre (#id)
  useEffect(() => {
    if (location.hash) {
      const projectId = location.hash.replace('#', '');
      const element = document.getElementById(projectId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <section className="projects-page">
      <h2>Mes projets</h2>
      {projects.map((project) => (
        <div id={project.id} key={project.id}>
          <ProjectDetail {...project} />
        </div>
      ))}
    </section>
  );
}

export default Projects;
