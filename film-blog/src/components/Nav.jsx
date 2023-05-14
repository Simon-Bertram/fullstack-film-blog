import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

const links = [
  {name: "Home", path: "/"},
  {name: "About", path: "about"},
  {name: "Articles", path: "articles"},
  {name: "Submit a review", path: "new-review"}
];

const Nav = () => {
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
    </nav>
  )
}

export default Nav;