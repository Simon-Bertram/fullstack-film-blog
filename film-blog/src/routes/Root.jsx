import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useHamburgerToggler from "../hooks/useHamburgerToggler"

const Root = () => {

  return (
    <>
      <Header />
      <main id="main" role="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Root;