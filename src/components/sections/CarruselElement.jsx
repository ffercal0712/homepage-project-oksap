/**
 * Elemento que forma parte del carrusel.
 *
 * @param img URL/ubicación del logo.
 * @param alt Texto alt del logo.
 * @returns {React.JSX.Element}
 * @constructor
 */
export function CarruselElement({ img, alt = "" }) {
    return <div className="carousel-item"><img src={img} alt={alt} /></div>;
}