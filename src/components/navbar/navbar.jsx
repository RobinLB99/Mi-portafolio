import Logo from "./logo";
import NavbarNav from "./navbarNav";
import Switch from "./switchTheme";

const Navbar = () => {
    return (
        <nav className="navbar dark py-0 px-3 m-0 shadow-sm">
            <Logo />
            <div
                className="d-flex flex-row align-items-center justify-content-end gap-3 p-0 m-0"
                id="content-link"
            >
                <NavbarNav />
                <Switch />
            </div>
        </nav>
    );
};

export default Navbar;
