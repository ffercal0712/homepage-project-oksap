import TeamCard from "./TeamCard.jsx";
import TeamCards from "./TeamCards.jsx";
import SectionTitle from "../SectionTitle.jsx";
import {useTranslation} from "react-i18next";

/**
 * Sección de los miembros del equipo.
 *
 * @param sectionTitle
 * @returns {React.JSX.Element}
 * @constructor
 */
function TeamSection({ sectionTitle }) {

    const { t } = useTranslation();

    return (
        <section id="team">
            <div className="team-container bg-section">
                <SectionTitle title={sectionTitle} />
                <TeamCards>
                    <TeamCard
                        img={"/src/img/team/team-1.jpg"}
                        name={"Florentin Navarrete Moya"}
                        description={t("teamDescPrincipal")}
                        principal={true}
                        linkedin={"https://www.linkedin.com/in/florentin-navarrete-moya-5aa186a/"}
                        mail={"florentin.navarrete@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-2.jpg"}
                        name={"Rodrigo Corrales Martínez"}
                        description={t("teamDesc1")}
                        linkedin={"https://www.linkedin.com/in/rodrigo-corrales-481195168/"}
                        mail={"rodrigo.corrales@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-3.jpg"}
                        name={"Celia Quiles Ramírez"}
                        description={t("teamDesc1")}
                        linkedin={"https://www.linkedin.com/in/celia-quiles-ramirez-5866a9240/"}
                        mail={"celia.quiles@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-4.jpg"}
                        name={"Sergio Vilar Pérez"}
                        description={t("teamDesc1")}
                        linkedin={"https://www.linkedin.com/in/sergio-vilar-perez-84ba08282/"}
                        mail={"sergio.vilar@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-5.jpg"}
                        name={"Rocío Viñas Velasco"}
                        description={t("teamDesc2")}
                        linkedin={"https://www.linkedin.com/in/roc%C3%ADo-v-3b514a5b/"}
                        mail={"rocio.vinas@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-6.jpg"}
                        name={"Milagros Barrós Chacaltana"}
                        description={t("teamDesc3")}
                        linkedin={"https://www.linkedin.com/in/milagros-barr%C3%B3s-3b828192/"}
                        mail={"milagros.barros@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-7.jpg"}
                        name={"Cristina Ramírez Quirós"}
                        description={t("teamDesc4")}
                        linkedin={"https://www.linkedin.com/in/cristina-r-6b6b2215a/"}
                        mail={"cristina.ramirez@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-8.jpg"}
                        name={"Paolo Puga De Patto"}
                        description={t("teamDescTrainee")}
                        linkedin={"https://www.linkedin.com/in/paolo-puga-de-patto-6819b6355/"}
                        mail={"paolo.puga@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-9.jpg"}
                        name={"Inés Pleguezuelos Salcedo"}
                        description={t("teamDescTrainee")}
                        mail={"ines.pleguezuelos@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-10.jpg"}
                        name={"Paula Claraco Ramírez"}
                        description={t("teamDescTrainee")}
                        linkedin={"https://www.linkedin.com/in/paula-claraco-ramirez-b6aa01228/"}
                        mail={"paula.claraco@oksap.es"}
                    />

                    <TeamCard
                        img={"/src/img/team/team-11.jpg"}
                        name={"Francisco Fernández Calzado"}
                        description={t("teamDescTrainee")}
                        linkedin={"https://www.linkedin.com/in/francisco-fernandez-a96163368/"}
                        mail={"francisco.fernandez@oksap.es"}
                    />
                </TeamCards>
            </div>
        </section>
    )
}

export default TeamSection;