import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import AboutMe from "./components/about_me/aboutme";
import MyProjects from "./components/projects/my_projects";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <AboutMe />
                <MyProjects />
            </main>
        </>
    );
}

export default App;
