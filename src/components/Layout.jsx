import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props){
    return (
        <div className="Layout">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout;