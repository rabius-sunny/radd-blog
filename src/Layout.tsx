import Footer from "../components/footer"
import Navbar from "../components/navbar"

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
