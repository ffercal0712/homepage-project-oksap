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
            <NavItem link={"#"} texto={"HOME"} />
            <NavItem link={"#"} texto={"AI VIDEOS"} />
            <NavItem link={"#"} texto={"BLOG"} />
            <NavItem link={"#"} texto={"ABOUT US"} />
            <NavItem link={"#"} texto={"CONTACT"} />
        </ul>
    )
}