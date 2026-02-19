import { useEffect, useState } from "react";
import { LanguageSelect } from "./LanguageSelect.jsx";
import {Logo} from "../Logo.jsx";
import {NavMenu} from "./NavMenu.jsx";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 20) {
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
            <Logo src={"/src/img/logo.png"} alt={"Logo de OKSAP"}/>

            <LanguageSelect />

            <NavMenu />
        </header>
    )
}