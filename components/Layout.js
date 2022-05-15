import Footer from "./Footer";
import Nabvar from "./Navbar";
import Menu from "./SideMenu";


const Layout = ({children}) => {
    return (
        <>
        <Menu />
        <div className="container">
            {children}
        </div>
        <Footer />
        </> 
     );
}
 
export default Layout;