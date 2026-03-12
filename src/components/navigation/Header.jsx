import { useEffect, useState } from "react";
import LanguageSelect from "../language/LanguageSelect.jsx";
import Logo from "../Logo.jsx";
import NavMenu from "./NavMenu.jsx";
import LanguageOption from "../language/LanguageOption.jsx";
import NavItem from "./NavItem.jsx";
import { useTranslation } from "react-i18next";

/**
 * Cabecera de la página principal.
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    /** Píxeles que se deben scrollear hacia abajo
     * antes de mostrar el fondo del menú de la cabecera.
     */
    const PX_BEFORE_VISIBLE = 20;

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > PX_BEFORE_VISIBLE);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { t } = useTranslation();

    return (
        <header className={`header${scrolled ? " header-scrolled" : ""}`}>
            <Logo src={"/src/img/logos/logo.png"} alt={"Logo de OKSAP"}/>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <div className={`nav-wrapper ${menuOpen ? "nav-open nav-overlay" : ""}`}>

                <button
                    className="menu-close"
                    onClick={() => setMenuOpen(false)}
                >
                    ✕
                </button>

                <LanguageSelect title={t("languageSelect")}>
                    <LanguageOption language={"ENGLISH"} code={"en"} src={"/src/img/lang/eng.png"} alt={"English"} />
                    <LanguageOption language={"ESPAÑOL"} code={"es"} src={"/src/img/lang/espana.png"} alt={"Español"} />
                    <LanguageOption language={"DEUTSCH"} code={"de"} src={"/src/img/lang/alemania.png"} alt={"Deutsch"} />
                    <LanguageOption language={"FRANÇAIS"} code={"fr"} src={"/src/img/lang/francia.png"} alt={"Français"} />
                    <LanguageOption language={"NORSK"} code={"nk"} src={"/src/img/lang/noruega.png"} alt={"Norsk"} />
                    <LanguageOption language={"SVENSKA"} code={"sv"} src={"/src/img/lang/suecia.png"} alt={"Svenska"} />
                </LanguageSelect>

                <NavMenu>
                    <NavItem link={"#"} title={t("home")} />
                    <NavItem link={"#"} title={t("aiVideos")} />
                    <NavItem link={"#"} title={t("blog")} />
                    <NavItem link={"#"} title={t("about")} />
                    <NavItem link={"#"} title={t("contact")} />
                </NavMenu>

            </div>
        </header>
    )
}

export default Header;