/**
 * Elemento utilizado para indicar servicios básicos.
 *
 * @param center 1 si el elemento en cuestión es el central, 0 si no.
 * @param icon Icono a mostrar.
 * @param alt Texto alt para el icono.
 * @param title Título del servicio.
 * @param text Texto del servicio.
 * @returns {React.JSX.Element}
 * @constructor
 */
export function ServiciosElement({ center, icon, alt, title, text }) {
    return (
        <div
            className={center === 1 ? "elem-servicios-central" : "elem-servicios"}>
            <img src={icon} alt={alt}/>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}