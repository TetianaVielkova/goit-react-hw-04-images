import {List} from './ImageGallery.styled';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) =>  {

    return (
        <>
            <List>
                {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem  key={id} tags={tags} webformatURL={webformatURL} largeImageURL={largeImageURL} />
                ))}
            </List>
        </>
        );
    }



