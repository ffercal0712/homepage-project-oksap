import { Header } from "./components/navigation/Header.jsx";
import { PortadaSection } from "./components/sections/PortadaSection.jsx";
import { ServiciosSection } from "./components/sections/services/ServiciosSection.jsx";
import { AboutUsSection } from "./components/sections/about-us/AboutUsSection.jsx";
import { SectionTitle } from "./components/sections/SectionTitle.jsx";
import {Carrusel} from "./components/sections/Carrusel.jsx";
import {CarruselElement} from "./components/sections/CarruselElement.jsx";

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

                <SectionTitle title={"Our Clients"} />
                <Carrusel duration={3}>
                    <CarruselElement img={"/src/img/about-us/foto.jpg"} />
                    <CarruselElement img={"/src/img/about-us/foto.jpg"} />
                    <CarruselElement img={"/src/img/about-us/foto.jpg"} />
                    <CarruselElement img={"/src/img/about-us/foto.jpg"} />
                </Carrusel>
            </main>

            <div style={{height:'200vh'}}></div>
        </>
    )
}