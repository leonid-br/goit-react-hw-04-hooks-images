import { overlay, modal } from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ url, tag, onClose, handleOverlayClick }) => {
    return createPortal(
        <div
            className={overlay}
            onClick={handleOverlayClick}
            onClose={onClose}
        >
            <div className={modal}>
                <img src={url} alt={tag} />
            </div>
        </div>,
        modalRoot,
    );
};
export default Modal;
