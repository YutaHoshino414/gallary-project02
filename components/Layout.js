import Footer from "./Footer";
import Nabvar from "./Navbar";
import Menu from "./SideMenu";


const Layout = ({children}) => {
    return (
        <div id="outer-container">
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
            <div className="container" id="page-wrap">
                {children}
            </div>
                <Footer />
        </div> 
    );
}
 
export default Layout;