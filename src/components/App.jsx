import { useState, useEffect } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {getImageApi} from './servises/api';
import {STATUS} from './constans/status';

import { ToastContainer } from 'react-toastify';

import { Button } from "components/Button/Button";
import {Loader} from './Loader/Loader';
import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from './ImageGallery/ImageGallery';

export const App = () => {
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

    useEffect(() => {
    if(!imageName) {
      return
    }
    fetchData(imageName, page);
  },[imageName, page]);


    const fetchData = async (imageName, page) => {
      setStatus(STATUS.pending);
    try{
        const {data} =await getImageApi(imageName, page);
        if(data.total === 0){
          setStatus(STATUS.rejected);
            return toast.warning(' Name not found. Try again ');
        }
        data.hits.map(image => {
        return setImages((prev) => ([...prev, image]));
    })
    }catch(error){
        console.log(error);
    }finally {
      setStatus(STATUS.success);
    }
}

  const handleSearch = imageName => {
    setPage(1);
    setImages([]);
    setImageName(imageName);
  };

  const handleLoadMore = () => {
    setPage(prev => (prev + 1 ));
}

    return (
      <>
        <Searchbar onSubmit={handleSearch}/>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
        { status === STATUS.pending  && <Loader/>}
        <ImageGallery images={images}/>
        {images.length >= 12  && status === STATUS.success && <Button handleLoadMore={handleLoadMore} />}
      </>
    );
  };
