import React, {useEffect} from "react";
import NavBar from "./frontend/navbar/index";
import Footer from "./frontend/footer/index";

export default function Layout({ children }) {
    // useEffect hook to handle the preloader on component mount
    useEffect(() => {
        handlePreloader();
    }, []);

    // Function to hide the preloader
    const handlePreloader = () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.transition = 'opacity 0.5s';
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    };
    return (
        <>
            <NavBar />
            {/*<div className="preloader">*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*    <div className="preloader__dot" />*/}
            {/*</div>*/}

            {children}

            <Footer />
        </>
    );
}