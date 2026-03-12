import Servicios from "./Servicios.jsx";
import ServiciosElement from "./ServiciosElement.jsx";
import { useTranslation } from "react-i18next";

/**
 * Sección de Servicios.
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
function ServiciosSection() {

    const { t } = useTranslation();

    return (
        <section id="seccion-servicios">
            <Servicios>
                <ServiciosElement
                    shade={0}
                    icon={"/src/img/icons/ico_mission.png"}
                    title={t("servicio1Title")}
                    text={t("servicio1Text")}
                />

                <ServiciosElement
                    shade={1}
                    icon={"/src/img/icons/ico_vision.png"}
                    title={t("servicio2Title")}
                    text={t("servicio2Text")}
                />

                <ServiciosElement
                    shade={0}
                    icon={"/src/img/icons/ico_values.png"}
                    title={t("servicio3Title")}
                    text={t("servicio3Text")}
                />
            </Servicios>
        </section>
    )
}

export default ServiciosSection;