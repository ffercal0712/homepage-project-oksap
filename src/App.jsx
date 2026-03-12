import Header from "./components/navigation/Header.jsx";
import PortadaSection from "./components/sections/PortadaSection.jsx";
import ServiciosSection from "./components/sections/services/ServiciosSection.jsx";
import AboutUsSection from "./components/sections/about-us/AboutUsSection.jsx";
import ClientsSection from "./components/sections/clients/ClientsSection.jsx";
import TeamSection from "./components/sections/team/TeamSection.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useTranslation } from "react-i18next";

/**
 * Componente que representa la página web, con todos los elementos
 * que la componen implementados.
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
function App() {

    const { t } = useTranslation();

    return (
        <>
            <Header />

            <PortadaSection
                title={t("portadaTitle")}
                subtitle={t("portadaSubtitle")}
            />

            <main>
                <ServiciosSection />

                <AboutUsSection sectionTitle={t("aboutUsTitle")} />

                <ClientsSection
                    titleClients={t("clientsTitle")}
                    titleClientsIT={t("clientsTitleIT")}
                />

                <TeamSection sectionTitle={t("teamTitle")} />
            </main>

            <Footer
                companyName={t("footerCompany")}
                copyrightText={t("footerCopyright")}
                copyrightLink={"http://marketingconectado.com/"}
            />
        </>
    )
}

export default App;