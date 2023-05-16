import { NavLink, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import { getAuth, signOut } from "firebase/auth";
import Hamburger from "./Hamburger";

const links = [
  {name: "Home", path: "/"},
  {name: "About", path: "about"},
  {name: "Articles", path: "articles"},
  {name: "Submit a review", path: "new-review"}
];

const Nav = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <nav aria-label="main" role="navigation">
      <Hamburger />
      <ul className="main-nav">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({isActive}) => isActive ? 'active' : ''}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        { user
          ? <button className="accent-button" onClick={() => {
              signOut(getAuth());
          }}>Logout</button>
          : <button className="accent-button" onClick={() => {
              navigate('/login');
          }}>Log In</button>
        }
      </div>
    </nav>
  )
}

export default Nav;