import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [orientacion, setorientacion] = useState(true);

  window.onload = function () {
    var orientation = window.screen.orientation.type;
    if (orientation === "portrait-primary") {
      setorientacion(false);
      console.log("falso");
    } else {
      setorientacion(true);
      console.log("True");
    }
  };

  window.onorientationchange = function () {
    var orientation2 = window.screen.orientation.type;
    if (orientation2 === "portrait-primary") {
      setorientacion(false);
    }

    if (orientation2 === "landscape-primary") {
      setorientacion(true);
    }
  };

  const images = {
    1: [
      "images/Sobre nosotros/Quienes somos-02.jpg",
      "images/Sobre nosotros/ItAdvance Mega-02.jpg",
      "images/Sobre nosotros/Proposito-02.jpg",
    ],
    2: [
      "images/Nuestro enfoque/Enfoque-02.jpg",
      "images/Nuestro enfoque/a quienes nos dirigimos-02.jpg",
      "images/Nuestro enfoque/que ofrecemos-02.jpg",
    ],
    3: [
      "images/Desarrollo de software a medida/1- que es desarrollo de software-02.jpg",
      "images/Desarrollo de software a medida/2- Cuando es necesario-02.jpg",
      "images/Desarrollo de software a medida/3- Beneficios-02.jpg",
    ],
    4: [
      "images/Consultoria/01-02.jpg",
      "images/Consultoria/02-02.jpg",
      "images/Consultoria/03-02.jpg",
      "images/Consultoria/04-02.jpg",
      "images/Consultoria/05-02.jpg",
      "images/Consultoria/06-02.jpg",
    ],
  };
  return (
    <>
      {orientacion ? (
        <div style={{ position: "relative" }}>
          <img
            src="images/Stand IT Advance-01.jpg"
            className="img-fluid"
            alt="Stand ITAdvance"
          />
          <a
            href="https://itadvancegroup.com/landing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="images/ver-mas.svg"
              className="imageButton animationButton pagina"
              alt="Ver mas"
            />
          </a>
          <div>
            <img
              src="images/galeria.svg"
              className="imageButton animationButton galeria-nosotros"
              alt="Ver mas"
              onClick={() => setIsOpen(1)}
            />
          </div>
          <div>
            <img
              src="images/galeria.svg"
              className="imageButton animationButton galeria-enfoque"
              alt="Ver mas"
              onClick={() => setIsOpen(2)}
            />
          </div>
          <a href="https://www.youtube.com/watch?v=4gW8BpFYey4" data-lity>
            <img
              src="images/video.svg"
              className="imageButton animationButton video"
              alt="Video"
            />
          </a>
          <a href="https://www.youtube.com/watch?v=WTk1N8Knmj0" data-lity>
            <img
              src="images/video.svg"
              className="imageButton animationButton video-rpa"
              alt="Video"
            />
          </a>
          <div>
            <img
              src="images/galeria.svg"
              className="imageButton animationButton galeria-software"
              alt="Ver mas"
              onClick={() => setIsOpen(3)}
            />
          </div>
          <div>
            <img
              src="images/galeria.svg"
              className="imageButton animationButton galeria-consultoria"
              alt="Ver mas"
              onClick={() => setIsOpen(4)}
            />
          </div>
          {!!isOpen && (
            <Lightbox
              mainSrc={images[isOpen][photoIndex]}
              nextSrc={images[isOpen][(photoIndex + 1) % images[isOpen].length]}
              prevSrc={
                images[isOpen][
                  (photoIndex + images[isOpen].length - 1) %
                    images[isOpen].length
                ]
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + images[isOpen].length - 1) %
                    images[isOpen].length
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images[isOpen].length)
              }
            />
          )}
        </div>
      ) : (
        <div className="containerRotate">
          <img
            src="images/rotate-mobile.gif"
            alt="Girar disposito"
            width="100%"
          />
        </div>
      )}
    </>
  );
}
