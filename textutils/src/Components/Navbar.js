// import { Link } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">about</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch mx-4 text-${props.Mode ==='light'?'dark':'light'}`}>
                        <input
                            className="form-check-input"
                            onClick={props.toggleMode}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            Dark Mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
