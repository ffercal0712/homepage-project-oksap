/**
 * Elemento del título para las secciones.
 *
 * @param title Título de la sección.
 * @returns {React.JSX.Element}
 * @constructor
 */
export function SectionTitle({ title }) {
    return (
        <>
            <h3 className="section-title">{title}</h3>
        </>
    )
}