import Branding from "./Branding";
import Nav from "./Nav";

const Header = () => {
  return (
    <header id="main-header">
      <div className="container">
        <Nav />
        <Branding />
      </div>
    </header>
  )
}

export default Header;