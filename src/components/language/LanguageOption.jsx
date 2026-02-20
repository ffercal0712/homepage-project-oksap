/**
 * Elemento que representa una opción en el DDL de idiomas.
 *
 * @param language nombre del idioma, en su idioma original
 * @param src URL de la imagen de la bandera
 * @param alt texto alt
 * @returns {React.JSX.Element}
 * @constructor
 */
export function LanguageOption({ language, src, alt }) {
    return (
        <a href="#">
            <img src={src} alt={alt}
                 width="20" height="20"/> {language}</a>
    )
}