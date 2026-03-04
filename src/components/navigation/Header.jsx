import { useEffect, useState } from "react";
import { LanguageSelect } from "../language/LanguageSelect.jsx";
import { Logo } from "../Logo.jsx";
import { NavMenu } from "./NavMenu.jsx";

/**
 * Cabecera de la página principal.
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    /** Píxeles que se deben scrollear hacia abajo
     * antes de mostrar el fondo del menú de la cabecera.
     */
    const PX_BEFORE_VISIBLE = 20;

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > PX_BEFORE_VISIBLE) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header${scrolled ? " header-scrolled" : ""}`}>
            <Logo src={"/src/img/logos/logo.png"} alt={"Logo de OKSAP"}/>

            <LanguageSelect title={"LANGUAGE"} />

            <NavMenu />
        </header>
    )
}