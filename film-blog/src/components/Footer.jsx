import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="container">
        <ul className="footer-links">
          <li>
            <Link 
              to="https://www.filmsite.org/"
              target="_blank" 
              rel="noopener noreferrer"
            >Filmsite</Link>
          </li>
          <li>
            <Link 
              to="https://www.imdb.com/"
              target="_blank" 
              rel="noopener noreferrer"
            >Internet Movie Database (IMDB)</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;