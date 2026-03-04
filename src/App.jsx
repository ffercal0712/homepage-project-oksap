import Header from "./components/navigation/Header.jsx";
import PortadaSection from "./components/sections/PortadaSection.jsx";
import ServiciosSection from "./components/sections/services/ServiciosSection.jsx";
import AboutUsSection from "./components/sections/about-us/AboutUsSection.jsx";
import ClientsSection from "./components/sections/clients/ClientsSection.jsx";

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
            </main>

            <div style={{height:'200vh'}}></div>
        </>
    )
}