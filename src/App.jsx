import { Header } from "./components/navigation/Header.jsx";

export function App() {
    return (
        <>
            <Header />

            <section id="seccion-portada">
                <a href="https://www.instagram.com/oksap.spain/" target="_blank"><img id={"img-ia"} src={"/src/img/decoration/ia.png"} alt={"Sandra, Elias y Clara"}/></a>
                <img id={"logo-portada"} src={"/src/img/logos/logo_portada.jpg"} alt={"Logo de OKSAP"}/>
                <h3>We're AI</h3>
                <h6>Success Factors, SAP HCM, Spanish Payroll</h6>
            </section>

            <main>
                <section id="seccion-servicios">
                    <div id="grid-servicios">
                        <div className="elem-servicios">
                            <img src="/src/img/icons/ico_mission.png" alt="Mission icon"/>
                            <h4>Mission</h4>
                            <p>To be the preferred destination for professionals seeking continuous growing within the SAP HR technologies to provide additional value to our clients.</p>
                        </div>
                        <div className="elem-servicios-central">
                            <img src="/src/img/icons/ico_vision.png" alt="Vision icon"/>
                            <h4>Vision</h4>
                            <p>To build exceptional teams and enhance their performance in SAP consulting, constantly raising their level of expertise.</p>
                        </div>
                        <div className="elem-servicios">
                            <img src="/src/img/icons/ico_values.png" alt="Values icon"/>
                            <h4>Values</h4>
                            <p>Specializing in SAP HR solutions with senior expertise in Spanish legal requirements.</p>
                        </div>
                    </div>
                </section>

                <section id="about-us">
                    <h3>What We Know to Do</h3>
                    <div id="about-us-cards">
                        <div className="about-us-card">
                            <div className="card-imgs">
                                <img className="card-img" src="/src/img/about-us/a.jpg" alt="Imagen de servicio A"/>
                                <h4 className="card-icon">AI</h4>
                            </div>
                        </div>

                        <div className="about-us-card">
                            <div className="card-imgs">
                                <img className="card-img" src="/src/img/about-us/a.jpg" alt="Imagen de servicio A"/>
                                <h4 className="card-icon">AI</h4>
                            </div>
                        </div>

                        <div className="about-us-card">
                            <div className="card-imgs">
                                <img className="card-img" src="/src/img/about-us/a.jpg" alt="Imagen de servicio A"/>
                                <h4 className="card-icon">AI</h4>
                            </div>
                        </div>

                        <div className="about-us-card">
                            <div className="card-imgs">
                                <img className="card-img" src="/src/img/about-us/a.jpg" alt="Imagen de servicio A"/>
                                <h4 className="card-icon">AI</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div style={{height:'200vh'}}></div>
        </>
    )
}