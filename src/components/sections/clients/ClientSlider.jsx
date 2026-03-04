import React from "react";
import Slider from "react-slick";

/**
 * Carrusel de logos de empresas cliente.
 *
 * @param children Elementos tipo ClientElement.
 * @param slidesToShow Número de logos que mostrar al mismo tiempo.
 * @param slideToLeft true si los logos se deben desplazar a la izquierda.
 *                    false si los logos se deben desplazar la derecha.
 *                    Opcional. true por defecto.
 * @param speed Velocidad del movimiento en milisegundos.
 *              Opcional. 500ms por defecto.
 * @param autoplay Modo autoplay para que los logos se vayan pasando solos.
 *                 Opcional. Desactivado por defecto.
 * @param autoplaySpeed Velocidad del modo autoplay en milisegundos.
 *                      Opcional. 2500ms por defecto. Si autoplay no está activo, no sirve de nada.
 * @returns {JSX.Element}
 * @constructor
 */
function ClientSlider({
                          children,
                          slidesToShow = 3,
                          slideToLeft = true,
                          speed = 500,
                          autoplay = false,
                          autoplaySpeed = 2500
}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        rtl: !slideToLeft,
    };

    return (
        <section className="clients-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </section>
    );
}

export default ClientSlider;