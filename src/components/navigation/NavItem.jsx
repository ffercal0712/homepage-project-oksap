/**
 * Elemento que representa un enlace para usar en el
 * menú de navegación superior de la página principal.
 *
 * @param link enlace para el elemento
 * @param texto nombre del enlace
 * @returns {React.JSX.Element}
 * @constructor
 */
export function NavItem({ link, texto }) {
    return (
        <>
            <li className="header-item"><a href={link}>{texto}</a></li>
        </>
    )
}