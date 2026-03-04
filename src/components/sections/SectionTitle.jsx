/**
 * Elemento del título para las secciones.
 *
 * @param title Título de la sección.
 * @returns {React.JSX.Element}
 * @constructor
 */
function SectionTitle({ title }) {
    return (
        <>
            <h3 className="section-title">{title}</h3>
        </>
    )
}

export default SectionTitle;