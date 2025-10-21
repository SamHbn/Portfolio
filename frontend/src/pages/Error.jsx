import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oups… Page non trouvée</h2>
      <p>La page que vous cherchez n’existe pas ou a été déplacée.</p>
      <Link to="/" className="error-page__btn">
        Retour à l’accueil
      </Link>
    </div>
  );
}

export default Error;
