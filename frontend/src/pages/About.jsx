import './About.scss';

function About() {
  return (
    <section className="about-page">
      <h2>À propos de moi</h2>

      <div className="about-intro">
        <p>
          Bonjour, je suis Samuel Herbin, développeur Full-Stack curieux et
          créatif, animé par l’envie de concevoir des interfaces élégantes et
          des expériences web fluides.
        </p>
      </div>

      <div className="about-parcours">
        <h3>Mon parcours</h3>
        <p>
          Ancien monteur PC, j’ai découvert le code suite à de petits tutos
          vidéo où j’aimais passer du temps, pour finalement me lancer dans la
          formation développeur web d’Openclassrooms.
        </p>
      </div>

      <div className="about-stack">
        <h3>Stack technique et expertise</h3>
        <p>
          Je développe des applications web avec React, Node.js et MongoDB pour
          concevoir des applications performantes et interactives, pensées pour
          offrir une expérience utilisateur moderne et efficace.
        </p>
      </div>

      <div className="about-projets">
        <h3>Projet marquant</h3>
        <p>
          Lors du projet Mon Vieux Grimoire, j’ai conçu une API sécurisée avec
          Node.js, Express et MongoDB pour la gestion et la notation de livres.
          Le défi principal consistait à assurer la sécurité des données et la
          fiabilité du système d’authentification. Au départ, aborder la partie
          backend était intimidant, les concepts me paraissaient flous, mais la
          pratique m’a permis de mieux comprendre l’ensemble de ce domaine.
        </p>
      </div>

      <div className="about-approche">
        <h3>Approche et différenciation</h3>
        <p>
          J’ai appris à travailler selon la méthode Agile, mais aussi à avancer
          seul avec autonomie et organisation. Cette polyvalence me permet de
          m’adapter facilement aux besoins d’un projet, en équipe ou en solo,
          tout en maintenant rigueur et qualité de code.
        </p>
      </div>

      <div className="about-ambitions">
        <h3>Projection et ambitions</h3>
        <p>
          Mon objectif est d’intégrer une équipe de développement web où la
          créativité et le design d’interface occupent une place centrale.
          J’aimerai contribuer à des projets à forte identité visuelle, tout en
          continuant à évoluer sur des technologies modernes du web.
        </p>
      </div>
    </section>
  );
}

export default About;
