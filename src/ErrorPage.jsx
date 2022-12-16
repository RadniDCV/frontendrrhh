import { Link } from "react-router-dom";
import "./index.css"
function App() {
  return (
    <div className="titulo">
        <h1><span className="error">Error 404</span> no se pudo encontrar la pagina</h1>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}
export default App;