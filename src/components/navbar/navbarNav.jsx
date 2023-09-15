const NavbarNav = () => {
    return (
        <div className="navbar-nav text-light" id="menu-nav">
            <a className="nav-link active" aria-current="page" href="#">
                Inicio
            </a>
            <a className="nav-link" href="#">
                Sobre mi
            </a>
            <a className="nav-link" href="#">
                Proyectos
            </a>
            <a className="nav-link" href="#">
                Contacto
            </a>
            <a
                className="btn-theme nav-link d-flex flex-row align-items-center gap-2 m-0 text-light"
                id="toggleMode"
            >
                <i className="fa-solid fa-moon" id="icon-theme"></i>
                <span>Theme</span>
            </a>
        </div>
    );
};

export default NavbarNav;
