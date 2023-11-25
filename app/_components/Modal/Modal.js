import { useRef } from "react";

import classes from "./Modal.module.scss";

const Modal = ({ isOpen, toggleModal, children }) => {
    const modalRef = useRef(null);
    const closeModal = (event) => {
        if (modalRef.current === event.target) {
            toggleModal();
        }
    };

    return (
        <div
            ref={modalRef}
            onClick={closeModal}
            className={`${classes["modal-container"]} ${
                isOpen ? classes["modal-open"] : classes["modal-close"]
            }`}>
            <div className={classes["modal"]}>{children}</div>
        </div>
    );
};
export default Modal;
