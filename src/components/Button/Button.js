import React, { useState } from "react";

import Modal from "../modal/modal";

const Button = () => {
  const [state, setState] = useState({
    isShowing: false
  });

  const { isShowing } = state;

  const openModalHandler = () => {
    setState({
      ...state,
      isShowing: true
    });
  };

  const closeModalHandler = () => {
    setState({
      ...state,
      isShowing: false
    });
  };

  return (
    <div>
      {isShowing && (
        <div onClick={closeModalHandler} className="back-drop"></div>
      )}

      <button className="open-modal-btn" onClick={openModalHandler}>
        Abrir Modal
      </button>

      <Modal className="modal" show={isShowing} close={closeModalHandler} />
    </div>
  );
};

export default Button;
