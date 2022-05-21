import Menu from "./SideMenu";
/** @jsxImportSource @emotion/react */ 


const Layout = ({children}) => {
    return (
        <div id="outer-container">
            <Menu 
                pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } 
            />
            <div className="container" id="page-wrap">
                {children}
            </div>
        </div> 
    );
}

export default Layout;