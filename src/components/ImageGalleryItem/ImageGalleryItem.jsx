import { useState } from "react";
import {Item, Img} from './ImageGalleryItem.styled';

import {Modal} from './../Modal/Modal';

export const ImageGalleryItem = ({webformatURL, largeImageURL, tags}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
        return(
            <Item>
                <Img src={webformatURL} alt={tags} onClick={openModal}/>
                {isModalOpen && <Modal largeImageURL={largeImageURL} tags={tags} onClose={closeModal} />}
            </Item>
        )
}
