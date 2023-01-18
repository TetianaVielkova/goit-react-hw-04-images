import {useEffect} from 'react';
import PropTypes  from "prop-types";

import {Overlay, ModalDiv } from './Modal.styled';

export const Modal = ({largeImageURL, tags, onClose}) => {

    useEffect(() => {
        const handleKeyClose = event => {
            if (event.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyClose);
        return () => {
            window.removeEventListener('keydown', handleKeyClose);
        }
    },[onClose]);

    const handleClose = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

        return (
            <Overlay onClick={handleClose}>
                <ModalDiv>
                    <img src={largeImageURL} alt={tags} />
                </ModalDiv>
            </Overlay>
        )
}


    Modal.propTypes = {
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    }