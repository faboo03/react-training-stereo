import { FaCheckSquare, FaListAlt, FaPlusSquare, FaRegCheckSquare, FaTrash } from 'react-icons/fa';
import { filterEnum, statusEnum } from './TodoList';

function NavBar({ setListStatus, setListFilter }) {

  const setListFilterClick = (filter) =>  {
    setListStatus(statusEnum.LIST); 
    setListFilter(filter);
  }
  
  return (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
      <div className="btn-group">
      <button className="btn btn-outline-dark bg-light" onClick={() => setListFilterClick(filterEnum.ALL)}><FaListAlt /></button>
      <button className="btn btn-outline-dark bg-light" onClick={() => setListFilterClick(filterEnum.TODO)}><FaRegCheckSquare /></button>
        <button className="btn btn-outline-dark bg-light" onClick={() => setListFilterClick(filterEnum.COMPLETED)}><FaCheckSquare /></button>
        <button className="btn btn-outline-dark bg-light" onClick={() => setListStatus(statusEnum.ADD)}><FaPlusSquare /></button>
      </div>
      <div className="btn-group" role="group">
        <button className="btn btn-outline-dark bg-light" onClick={() => setListStatus(statusEnum.REMOVE)}><FaTrash /></button>
      </div>
    </footer>
  )
}

export default NavBar;