import ClientSlider from "./ClientSlider.jsx";
import SectionTitle from "../SectionTitle.jsx";
import ClientElement from "./ClientElement.jsx";

/**
 * Sección de clientes, tanto los normales como los de TIC.
 *
 * @param titleClients Título de la sección de clientes normales.
 * @param titleClientsIT Título de la sección de clientes TIC.
 * @returns {React.JSX.Element}
 * @constructor
 */
function ClientsSection({ titleClients, titleClientsIT }) {
    return (
        <section>
            <div className="clients-section">
                <SectionTitle title={titleClients} />
                <ClientSlider
                    slidesToShow={6}
                    autoplay={true}>
                    <ClientElement img={"/src/img/clients/client-01.png"} alt={"TransGourmet"} />
                    <ClientElement img={"/src/img/clients/client-02.png"} alt={"RyanAir"} />
                    <ClientElement img={"/src/img/clients/client-03.png"} alt={"Vall Companies Grupo"} />
                    <ClientElement img={"/src/img/clients/client-04.png"} alt={"Fujitsu"} />
                    <ClientElement img={"/src/img/clients/client-05.png"} alt={"Madrid"} />
                    <ClientElement img={"/src/img/clients/client-06.png"} alt={"Benteler"} />
                    <ClientElement img={"/src/img/clients/client-07.png"} alt={"Bombardier"} />
                    <ClientElement img={"/src/img/clients/client-08.png"} alt={"Gobierno Vasco"} />
                    <ClientElement img={"/src/img/clients/client-09.png"} alt={"Garrigues"} />
                    <ClientElement img={"/src/img/clients/client-10.png"} alt={"CaixaBank"} />
                    <ClientElement img={"/src/img/clients/client-11.png"} alt={"Airbus"} />
                    <ClientElement img={"/src/img/clients/client-12.png"} alt={"UPC"} />
                    <ClientElement img={"/src/img/clients/client-13.png"} alt={"Vodafone"} />
                    <ClientElement img={"/src/img/clients/client-14.png"} alt={"Dr. Schneider"} />
                    <ClientElement img={"/src/img/clients/client-15.png"} alt={"Boehringer Ingelheim"} />
                </ClientSlider>
            </div>

            <div className="clients-section section-alt">
                <SectionTitle title={titleClientsIT} />
                <ClientSlider
                    slidesToShow={6}
                    slideToLeft={false}
                    autoplay={true}
                    autoplaySpeed={3000}>
                    <ClientElement img={"/src/img/clients/it-clients/it-01.png"} alt={"SAP"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-02.png"} alt={"Epi Use"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-03.png"} alt={"ADP"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-04.png"} alt={"SMX Services & Consulting"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-05.png"} alt={"Zalaris"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-06.png"} alt={"Accenture"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-07.png"} alt={"Sariba HR"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-08.png"} alt={"Capgemini"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-09.png"} alt={"ZOI"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-10.png"} alt={"ImagineRight"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-11.png"} alt={"Keyland Sistemas de Gestión"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-12.png"} alt={"Sapas"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-13.png"} alt={"SNP"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-14.png"} alt={"Sopra"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-15.png"} alt={"HR Path"} />
                    <ClientElement img={"/src/img/clients/it-clients/it-16.png"} alt={"EY"} />
                </ClientSlider>
            </div>
        </section>
    )
}

export default ClientsSection;