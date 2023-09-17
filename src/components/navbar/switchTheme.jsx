const Switch = () => {
    return (
        <div className="container d-flex flex-row gap-2 align-items-center m-0" id="content-switch">
            <div
                className="toggle m-0 d-flex flex-row align-items-center"
                id="switch-theme"
            >
                <input type="checkbox" />
                <span className="slider"></span>
            </div>
            <i id="switch-theme-icon" className="text-light label fa-solid fa-sun"></i>
        </div>
    );
};

export default Switch;
