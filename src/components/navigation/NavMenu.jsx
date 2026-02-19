import {NavItem} from "./NavItem.jsx";

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