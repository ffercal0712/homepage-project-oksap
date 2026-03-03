/**
 * Tarjetas usadas para describir servicios que se ofrecen.
 *
 * @param iconText Icono de texto que usar en vez de una imagen. Recomendado dos caracteres máximos.
 * @param iconImage Icono en imagen que utilizar en vez de texto. Para poder utilizarlo, no hay que indicar un iconText, o dejarlo vacío.
 * @param backgroundImg Imagen que utilizar de fondo para la tarjeta.
 * @param title Título de la tarjeta.
 * @param text Texto de la tarjeta.
 * @param link URL/enlace enlazada por el título de la tarjeta. Se abre en una nueva pestaña.
 * @returns {React.JSX.Element}
 * @constructor
 */
export function AboutUsCard({ iconText, iconImage, backgroundImg, title, text, link }) {
    if (iconText === '' || iconText === undefined) {
        return (
            <div className="about-us-card">
                <div className="card-imgs">
                    <img className="card-img" src={backgroundImg}/>
                    <div className="card-icon-container">
                        <img className="card-icon-img" src={iconImage}/>
                    </div>
                </div>
                <div className="card-text">
                    <h2>
                        <a href={link} target="_blank">{title}</a>
                    </h2>
                    <p>{text}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="about-us-card">
                <div className="card-imgs">
                    <img className="card-img" src={backgroundImg}/>
                    <h4 className="card-icon">{iconText}</h4>
                </div>
                <div className="card-text">
                    <h2>
                        <a href={link} target="_blank">{title}</a>
                    </h2>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}