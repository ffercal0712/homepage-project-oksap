import Header from "./components/navigation/Header.jsx";
import PortadaSection from "./components/sections/PortadaSection.jsx";
import ServiciosSection from "./components/sections/services/ServiciosSection.jsx";
import AboutUsSection from "./components/sections/about-us/AboutUsSection.jsx";
import ClientsSection from "./components/sections/clients/ClientsSection.jsx";
import TeamSection from "./components/sections/team/TeamSection.jsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export function App() {
    return (
        <>
            <Header />

            <PortadaSection
                title={"We're AI"}
                subtitle={"Success Factors, SAP HCM, Spanish Payroll"}
            />

            <main>
                <ServiciosSection />

                <AboutUsSection sectionTitle={"What We Know to Do"} />

                <ClientsSection
                    titleClients={"Our Clients"}
                    titleClientsIT={"Contracted by the best IT companies"}
                />

                <TeamSection sectionTitle={"Our Team"} />
            </main>

            {/*<div className="footer-separation" style={{height:'10vh'}}></div>*/}

            <footer>
                <div className="footer">
                    <div className="company-container">
                        <div className="grey-wall"/>
                        <h2>OKSAP Spain</h2>
                    </div>
                    <div className="footer-container">
                        <hr/>
                        <div className="footer-block">
                            <span className="info">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <a href="https://www.sap.com/" target="_blank">www.sap.com</a>
                            </span>
                            <hr />
                        </div>
                        <div className="footer-block">
                            <span className="info">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <a href="https://oksap.es/politicas.php" target="_blank">Privacy statement</a>
                            </span>
                            <hr />
                        </div>
                        <div className="footer-block">
                            <span className="info">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <a href="https://oksap.es/politicas_notice.php" target="_blank">Privacy notice</a>
                            </span>
                            <hr />
                        </div>
                    </div>
                    <div className="footer-container">
                        <hr/>
                        <div className="footer-block">
                            <span className="contact">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <p>Calle Matías Lara 24. 29640 Fuengirola (España)</p>
                            </span>
                            <hr />
                        </div>
                        <div className="footer-block">
                            <span className="contact">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <a href="mailto:info@oksap.es">info@oksap.es</a>
                            </span>
                            <hr />
                        </div>
                        <div className="footer-block">
                            <span className="contact">
                                <MdKeyboardArrowRight className="block-arrow" />
                                <a href="https://blog.oksap.es/" target="_blank">Industry news</a>
                            </span>
                            <hr />
                        </div>
                    </div>
                    <div className="footer-container">
                        <a href="https://twitter.com/oksap_spain" target="_blank">
                            <FaSquareXTwitter className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/oksap-spain/" target="_blank">
                            <FaLinkedin className="icon" />
                        </a>
                    </div>
                </div>
                <div className="footer-copyright">
                    <a href="http://marketingconectado.com/" target="_blank"><h6>Copyright 2025 © OKSAP Spain</h6></a>
                </div>
            </footer>
        </>
    )
}