export function NavItem({ link, texto }) {
    return (
        <>
            <li className="header-item"><a href={link}>{texto}</a></li>
        </>
    )
}