import { useState, useEffect, useRef } from 'react';
import { Style } from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Button from './Button';
import { toast } from 'react-toastify';

import imgAPI, { options } from '../services/img-api';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [targetImg, setTargetImg] = useState(null);
    const [imgName, setImgName] = useState(null);
    const [status, setStatus] = useState('idle');
    const [imgArr, setImgArr] = useState([]);
    const [error, setError] = useState(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (searchQuery.trim() === '') {
            toast.warn('Введите ваш запрос');
            return;
        }
        setStatus('pending');

        imgFetch();
        setImgArr([]);
    }, [searchQuery]);

    const handleFormSubmit = query => {
        setSearchQuery(query);
    };

    const checkHits = (prevState, hits) => {
        if (hits.hits.length === 0) {
            setStatus('rejected');
            setError(`Картинок по запросу ${searchQuery} нет`);
        } else {
            setImgArr([...prevState, ...hits.hits]);
            setStatus('resolved');
            options.pageNumber += 1;
        }
    };

    const imgFetch = () => {
        imgAPI
            .fetchImg(searchQuery)
            .then(hits => {
                setImgArr(prevState => {
                    checkHits(prevState, hits);
                });
            })
            .catch(error => setError(error))
            .finally(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            });
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const onImgClick = e => {
        const imgURL = e.currentTarget.dataset.action;
        const imgTag = e.target.alt;
        setTargetImg(imgURL);
        setImgName(imgTag);
    };

    return (
        <div className={Style}>
            <Searchbar onSubmit={handleFormSubmit} />

            <ImageGallery
                error={error}
                status={status}
                imgArr={imgArr}
                toggleModal={toggleModal}
                onImgClick={onImgClick}
            />

            {status === 'resolved' && (
                <Button onLoadMore={imgFetch} />
            )}

            {showModal && (
                <Modal onClose={toggleModal}>
                    <img src={targetImg} alt={imgName} />
                </Modal>
            )}

            <ToastContainer
                position="top-center"
                autoClose={2000}
            />
        </div>
    );
};

export default App;
