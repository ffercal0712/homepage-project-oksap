import { NavItem } from "./NavItem.jsx";

/**
 * Menú de navegación superior para la página principal.
 *
 * @returns {React.JSX.Element}
 * @constructor
 */
export function NavMenu() {
    return (
        <ul className="header-list">
            <NavItem link={"#"} title={"HOME"} />
            <NavItem link={"#"} title={"AI VIDEOS"} />
            <NavItem link={"#"} title={"BLOG"} />
            <NavItem link={"#"} title={"ABOUT US"} />
            <NavItem link={"#"} title={"CONTACT"} />
        </ul>
    )
}