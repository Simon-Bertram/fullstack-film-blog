import { NavLink } from "react-router-dom";

const links = [
  {name: "Home", path: "/"},
  {name: "About", path: "about"},
  {name: "Articles", path: "articles"},
  {name: "Submit a review", path: "new-review"}
];

const Nav = () => {
  return (
    <nav>
      <ul>
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