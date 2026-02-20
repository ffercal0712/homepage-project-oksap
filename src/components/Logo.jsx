/**
 * Logo de la página, en formato pequeño.
 *
 * @param src URL del logo
 * @param alt texto alt
 * @returns {React.JSX.Element}
 * @constructor
 */
export function Logo({ src, alt }) {
    return (
        <img className="logo" src={src} alt={alt}/>
    )
}