import './Banner.scss';

function Banner() {
  const handleScrollToProjects = () => {
    const section = document.getElementById('projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner">
      <div className="banner__content">
        <h1>Bienvenue sur le portfolio de Samuel</h1>
        <p>Développeur front-end passionné par React et le design web.</p>
        <button className="banner__btn" onClick={handleScrollToProjects}>
          Voir mes projets
        </button>
      </div>
    </section>
  );
}

export default Banner;
