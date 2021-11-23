import { FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash } from 'react-icons/fa';
import { statusEnum } from './TodoList';

function NavBar({ setListStatus }) {
  return (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
      <div className="btn-group">
        <button className="btn btn-outline-dark bg-light" onClick={() => setListStatus(statusEnum.LIST)}><FaCheckSquare /></button>
        <button className="btn btn-outline-dark bg-light" onClick={() => setListStatus(statusEnum.COMPLETED)}><FaListAlt /></button>
        <button className="btn btn-outline-dark bg-light" onClick={() => setListStatus(statusEnum.ADD)}><FaPlusSquare /></button>
      </div>
      <div className="btn-group" role="group">
        <button className="btn btn-outline-dark bg-light" onClick={() => setListStatus(statusEnum.DELETE)}><FaTrash /></button>
      </div>
    </footer>
  )
}

export default NavBar;