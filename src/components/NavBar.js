import { FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash } from 'react-icons/fa';


function NavBar() {
    return (
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
    )
}

export default NavBar;