import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { RootContainer } from "../styles/customs/container"

const Layout = ({ children }: any) => {
    return (
        <RootContainer>
            <Navbar />
            {children}
            <Footer />
        </RootContainer>
    )
}

export default Layout
