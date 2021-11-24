import { FaCheckSquare, FaListAlt, FaPlusSquare, FaRegCheckSquare, FaTrash } from 'react-icons/fa';
import { filterEnum, statusEnum } from './TodoList';

function NavBar({ setListStatus, setListFilter, listStatus, listFilter }) {

  const setListFilterClick = (filter) =>  {
    setListStatus(statusEnum.LIST); 
    setListFilter(filter);
  }

  const setListStatusClick = (status) => {
    if(status === statusEnum.ADD) {
      return statusEnum.ADD === listStatus ? setListStatus(statusEnum.LIST) : setListStatus(statusEnum.ADD);
    }

    if(status === statusEnum.REMOVE) {
      return statusEnum.REMOVE === listStatus ? setListStatus(statusEnum.LIST) : setListStatus(statusEnum.REMOVE);
    }

  } 
  
  let classNameString = {
    active: "btn btn-dark bg-secondary",
    other: "btn btn-outline-dark bg-light"
  }

  return (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
      <div className="btn-group">
        <button className={listFilter === filterEnum.ALL?classNameString.active:classNameString.other} onClick={() => setListFilterClick(filterEnum.ALL)}><FaListAlt /></button>
        <button className={listFilter === filterEnum.TODO?classNameString.active:classNameString.other} onClick={() => setListFilterClick(filterEnum.TODO)}><FaRegCheckSquare /></button>
        <button className={listFilter === filterEnum.COMPLETED?classNameString.active:classNameString.other} onClick={() => setListFilterClick(filterEnum.COMPLETED)}><FaCheckSquare /></button>
        <button className={listStatus === statusEnum.ADD?classNameString.active:classNameString.other} onClick={() => setListStatusClick(statusEnum.ADD)}><FaPlusSquare /></button>
      </div>
      <div className="btn-group" role="group">
        <button className={listStatus === statusEnum.REMOVE?classNameString.active:classNameString.other} onClick={() => setListStatusClick(statusEnum.REMOVE)}><FaTrash /></button>
      </div>
    </footer>
  )
}

export default NavBar;