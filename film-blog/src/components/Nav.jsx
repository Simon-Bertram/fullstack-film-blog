import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  {name: "Home", path: "/"},
  {name: "About", path: "about"},
  {name: "Articles", path: "articles"},
  {name: "Submit a review", path: "new-review"}
];

const Nav = () => {
  return (
    <nav aria-label="main" role="navigation">
      <button id="hamburger" aria-expanded="false">
        <span className="visually-hidden">Menu</span>
        <svg viewBox='0 0 10 8' width='35'>
          <path d='M1 1h8M1 4h 8M1 7h8' 
                stroke='#fff' 
                strokeWidth='1' 
                strokeLinecap='round'/>
        </svg>
      </button>

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