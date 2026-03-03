import { AboutUsCards } from "./AboutUsCards.jsx";
import { SectionTitle } from "../SectionTitle.jsx";

/**
 * Sección About Us (Sobre Nosotros).
 *
 * @param sectionTitle Título de la sección a mostrar.
 * @returns {React.JSX.Element}
 * @constructor
 */
export function AboutUsSection({ sectionTitle }) {
    return (
        <section id="about-us">
            <div className="about-us-container">
                <SectionTitle title={sectionTitle} />
                <AboutUsCards />
            </div>
        </section>
    )
}