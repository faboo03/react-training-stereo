import { FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
          <div className="btn-group">
            <NavLink
              className={'btn btn-outline-dark bg-light'}
              to={`/`}
            >
              <FaCheckSquare />
            </NavLink>
            <NavLink
              className={'btn btn-outline-dark bg-light'}
              to={`/completed`}
            >
              <FaListAlt />
            </NavLink>
            <NavLink
              className={'btn btn-outline-dark bg-light'}
              to={`/add-task`}
            >
              <FaPlusSquare />
            </NavLink>
          </div>
          <div class="btn-group" role="group">
          <NavLink
              className={'btn btn-outline-dark bg-light'}
              to={`/`}
            >
              <FaTrash />
            </NavLink>
          </div>
        </footer>
    )
}

export default NavBar;