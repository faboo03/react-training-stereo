import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash } from 'react-icons/fa';

function App() {
  return (
    <section classId="todo">
      <h1 className="m-3">Liste de tâches</h1>
      <ul className="list-group m-3">
        <li className="list-group-item d-flex align-items-center">
          Ranger la vaisselle
          <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
          Répondre appel d'offres
          <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
          Signer contrat
          <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
          Ranger la salon
          <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
        </li>
      </ul>
      <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
          <a href="#" class="btn btn-outline-dark bg-light"><FaCheckSquare /></a>
          <a href="#" class="btn btn-outline-dark bg-light"><FaListAlt /></a>
          <a href="#" class="btn btn-outline-dark bg-light"><FaPlusSquare /></a>
        </div>
        <div class="btn-group" role="group">
          <a href="#" class="btn btn-outline-dark bg-light"><FaTrash /></a>
        </div>
      </footer>
    </section>
  );
}

export default App;