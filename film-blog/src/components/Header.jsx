import Branding from "./Branding";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <a href="#main" className="visually-hidden">Skip to main content</a>
      <header id="main-header" role="navigation">
        <div className="container">
          <Nav />
          <Branding />
        </div>
      </header>
    </>
  )
}

export default Header;