import SectionTitle from "../SectionTitle.jsx";
import AboutUsCards from "./AboutUsCards.jsx";
import AboutUsCard from "./AboutUsCard.jsx";
import {useTranslation} from "react-i18next";

/**
 * Sección About Us (Sobre Nosotros).
 *
 * @param sectionTitle Título de la sección a mostrar.
 * @returns {React.JSX.Element}
 * @constructor
 */
function AboutUsSection({ sectionTitle }) {

    const { t } = useTranslation();

    return (
        <section id="about-us">
            <div className="about-us-container bg-section-alt">
                <SectionTitle title={sectionTitle} />
                <AboutUsCards>
                    <AboutUsCard
                        iconText={"AI"}
                        backgroundImg={"/src/img/about-us/d.jpg"}
                        title={t("aboutUs1Title")}
                        text={t("aboutUs1Text")}
                    />

                    <AboutUsCard
                        iconImage={"/src/img/logos/logo_sap.png"}
                        backgroundImg={"/src/img/about-us/a.jpg"}
                        title={t("aboutUs2Title")}
                        text={t("aboutUs2Text")}
                    />

                    <AboutUsCard
                        iconImage={"/src/img/icons/ico_ssff.png"}
                        backgroundImg={"/src/img/about-us/b.jpg"}
                        title={t("aboutUs3Title")}
                        text={t("aboutUs3Text")}
                    />

                    <AboutUsCard
                        iconText={"HR"}
                        backgroundImg={"/src/img/about-us/c.jpg"}
                        title={t("aboutUs4Title")}
                        text={t("aboutUs4Text")}
                    />
                </AboutUsCards>
            </div>
        </section>
    )
}

export default AboutUsSection;