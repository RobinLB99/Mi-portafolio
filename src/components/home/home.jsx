import Tecnologias from "../../js/tecnologies";

const Home = () => {
    const technologyImages = Object.entries(Tecnologias).map(
        ([clave, valor]) => <img key={clave} src={valor} alt={clave} />
    );

    return (
        <section className="seccion home dark" id="home">
            <div className="container_home">
                <div className="presentation text-light" id="presentation">
                    <h1 id="nombre" className="m-0 bg-dark-mode px-3">
                        Robin Joel Lugo Boero
                    </h1>
                    <h4 id="cargo" className="m-0 bg-dark-mode px-3">
                        | Full Stack Web & Java Developer |
                    </h4>
                    <div
                        id="tecno"
                        className="bg-dark-mode m-0 d-flex flex-row gap-2 align-items-center tecnologies-img py-1 px-3"
                    >
                        {technologyImages}
                    </div>
                    <a
                        className="github bg-dark-mode link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover d-flex align-items-center gap-2 m-0 px-3"
                        href="https://github.com/RobinLB99"
                        target="_blank"
                        id="github"
                    >
                        <i className="fa-brands fa-github"></i>
                        <span>RobinLB99</span>
                    </a>
                </div>
                <picture className="perfil">
                    <source
                        className="avatar"
                        srcSet="../../public/avatar2.webp"
                        media="(min-width: 720px)"
                        hidden
                    />
                    <img
                        src="../../public/avatar1.webp"
                        alt="avatar"
                        className="avatar my-auto mx-0"
                        id="avatar"
                    />
                </picture>
            </div>
        </section>
    );
};

export default Home;
