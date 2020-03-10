import React from "react";
import "./modal.css";
import Img from "../../img/unplash.jpg";

const modal = props => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <div className="modal-header">
          <h3>Modal Header</h3>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-body-img">
            <img src={Img} alt="car" />
          </div>
          <div className="modal-body-text">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original.
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>
            CERRAR
          </button>
          <button className="btn-continue">ACEPTAR</button>
        </div>
      </div>
    </div>
  );
};
export default modal;
