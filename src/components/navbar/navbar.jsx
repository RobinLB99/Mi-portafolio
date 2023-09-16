import Logo from "./logo";
import CollapseButton from "./colappseButton";
import NavbarNav from "./navbarNav";
import Switch from "./switchTheme";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-1 px-3">
            <div className="content d-flex flex-row justify-content-between">
                <Logo />
                <div className="d-flex flex-row align-items-center justify-content-end gap-3" id="content-link">
                    <NavbarNav />
                    <Switch />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
