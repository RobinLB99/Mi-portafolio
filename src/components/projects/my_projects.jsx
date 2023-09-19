import Projects from "../../js/projects-list";

const MyProjects = () => {
    const Proyectos = Projects.map((project, index) => (
        <div key={index} className="card c-project card-dark">
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
            </div>
        </div>
    ));

    return (
        <div className="projects dark" id="Projects">
            <h3 className="text-light">Mis proyectos</h3>
            <div className="border opacity-50 mx-auto"></div>
            <div className="box-projects">
                {Proyectos}
            </div>
        </div>
    );
};

export default MyProjects;
