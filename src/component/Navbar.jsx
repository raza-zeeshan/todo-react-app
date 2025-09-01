import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-info">
        <div className="container-fluid ">
          <NavLink to="/" className="navbar-brand">
            <i className="fa fa-snowflake-o mx-5 text fw-bold font-weight-light">
              {" "}
              Todo App
            </i>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
