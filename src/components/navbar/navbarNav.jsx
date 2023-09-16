const NavbarNav = () => {
    return (
        <div
            className="d-flex flex-row align-items-center justify-content-between text-light"
            id="menu-nav"
        >
            <a className="nav-link" aria-current="page" href="#">
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
        </div>
    );
};

export default NavbarNav;
