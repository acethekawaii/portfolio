import Navbar from "./navbar.jsx";
import Footer from './footer.jsx'

function Layout({ children }) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout