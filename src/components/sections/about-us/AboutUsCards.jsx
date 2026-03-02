import {AboutUsCard} from "./AboutUsCard.jsx";

/**
 * Colección de tarjetas que muestran los servicios que se ofrecen.
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
export function AboutUsCards() {
    return (
        <div id="about-us-cards">
            <AboutUsCard
                iconText={"AI"}
                backgroundImg={"/src/img/about-us/d.jpg"}
                title={"Artificial Intelligence"}
                text={"AI applied to Human Resources processes"}
                link={"#"}
            />

            <AboutUsCard
                iconImage={"/src/img/logos/logo_sap.png"}
                backgroundImg={"/src/img/about-us/a.jpg"}
                title={"SAP HCM and Employee Central Payroll"}
                text={"New Implementations and Maintenances"}
                link={"#"}
            />

            <AboutUsCard
                iconImage={"/src/img/icons/ico_ssff.png"}
                backgroundImg={"/src/img/about-us/b.jpg"}
                title={"Success Factors Employee Central"}
                text={"Employee Central Core, Workshops, Requirements Definition, Functional Design, Business Blue Print, Build"}
                link={"#"}
            />

            <AboutUsCard
                iconText={"HR"}
                backgroundImg={"/src/img/about-us/c.jpg"}
                title={"Human Resources Processes"}
                text={"Spanish Payroll, Social Security, Taxes HR Processes"}
                link={"#"}
            />
        </div>
    )
}