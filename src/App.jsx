import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import AboutMe from "./components/about_me/aboutme";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <AboutMe />
            </main>
        </>
    );
}

export default App;
