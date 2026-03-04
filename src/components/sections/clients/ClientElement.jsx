/**
 * Elemento que representa a un cliente en el slider de clientes.
 *
 * @param img URL/ubicación de la imagen/logo del cliente.
 * @param alt Nombre del cliente para el texto alternativo.
 * @returns {React.JSX.Element}
 * @constructor
 */
function ClientElement({ img, alt }) {
    return (
        <div className="client-item">
            <img src={img} alt={alt} />
        </div>
    )
}

export default ClientElement;