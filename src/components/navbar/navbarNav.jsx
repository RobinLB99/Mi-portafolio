const NavbarNav = () => {
    return (
        <ul className="menu-links d-flex flex-row m-0" id="menu-links">
            <li className="text-light">
                <a
                    href="#"
                    className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex gap-2 align-items-center"
                >
                    <i className="fa-solid fa-house"></i>
                    <span>Inicio</span>
                </a>
            </li>
            <li className="text-light">
                <a
                    href="#"
                    className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex gap-2 align-items-center"
                >
                    <i className="fa-solid fa-user"></i>
                    <span>Sobre mi</span>
                </a>
            </li>
            <li className="text-light">
                <a
                    href="#"
                    className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex gap-2 align-items-center"
                >
                    <i className="fa-solid fa-suitcase"></i>
                    <span>Proyectos</span>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex gap-2 align-items-center"
                >
                    <i className="fa-solid fa-message"></i>
                    <span>Contacto</span>
                </a>
            </li>
        </ul>
    );
};

export default NavbarNav;
