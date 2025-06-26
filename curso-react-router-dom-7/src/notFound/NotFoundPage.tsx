import { useNavigate } from 'react-router';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Página no encontrada</h1>
      <p className="not-found-message">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <button className="not-found-button" onClick={handleGoHome}>
        Volver al inicio
      </button>
    </div>
  );
}
