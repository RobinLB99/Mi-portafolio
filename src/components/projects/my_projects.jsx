import Projects from "../../js/projects-list";

const MyProjects = () => {
    const icon = (typeLink) => {
        if (typeLink.toString() === "github") {
            return <i className="fa-brands fa-github"></i>;
        } else return <i className="fa-solid fa-globe"></i>;
    };

    const link_ = (typeLink, link) => {
        let text;
        typeLink.toString() === "github" ? (text = "Github") : (text = "Web");
        return (
            <a
                className="link-light link-underline-opacity-0 link-underline-opacity-100-hover d-flex flex-row gap-2 align-items-center"
                href={link}
                target="_blank"
            >
                {icon(typeLink)}
                <span>{text}</span>
            </a>
        );
    };

    const Proyectos = Projects.map((project, index) => (
        <div key={index} className="card c-project card-dark shadow-sm">
            <img
                className="preview-project img-fluid card-img-top"
                src={project.img}
                alt={project.title}
            />
            <div className="card-body">
                <h4 className="card-title text-light">{project.title}</h4>
                <div className="technologies-used my-3 d-flex flex-row gap-2">
                    {Object.entries(project.tecnologies).map(
                        ([tec, img], tecIndex) => (
                            <img src={img} alt={tec} key={tecIndex} />
                        )
                    )}
                </div>
                <p className="card-text text-light">{project.description}</p>
                <div className="links d-flex flex-row gap-3 align-items-center">
                    {Object.entries(project.links).map(
                        ([name, link], link_index) => (
                            <label
                                key={link_index}
                                className="d-flex flex-row gap-2 align-items-center"
                            >
                                {link_(name, link)}
                            </label>
                        )
                    )}
                </div>
            </div>
        </div>
    ));

    return (
        <div className="projects dark" id="Projects">
            <h3 className="project-section-title text-light">Mis proyectos</h3>
            <div className="project-section-border border border-light opacity-50 mx-auto"></div>
            <div className="box-projects">{Proyectos}</div>
        </div>
    );
};

export default MyProjects;
