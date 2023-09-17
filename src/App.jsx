import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Home />
            </main>
        </>
    );
}

export default App;
