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
            <SectionTitle title={sectionTitle} />
            <AboutUsCards />
        </section>
    )
}