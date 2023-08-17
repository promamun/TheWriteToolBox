import React, {useEffect} from "react";
import NavBar from "./frontend/navbar/index";
import Footer from "./frontend/footer/index";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}