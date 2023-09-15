import Logo from "./logo";
import CollapseButton from "./colappseButton";
import NavbarNav from "./navbarNav";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-1 px-3">
            <div className="container-fluid">
                <Logo />
                <CollapseButton />
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <NavbarNav />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
