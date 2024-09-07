import { useState, useEffect, useRef } from "react";
import { photos } from "../service/photos";

export const usePhotos = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const searchInput = useRef(null);

    useEffect(() => {
        if (searchInput.current?.value) {
            fetchImages();
        }
    }, [page]);

    const fetchImages = async () => {
        try {
            const { results, totalPages } = await photos(searchInput.current.value, page);
            setImages(results);
            setTotalPages(totalPages);
        } catch (error) {
            console.log(error);
        }
    };

    const resetSearch = () => {
        setPage(1);
        fetchImages();
    };

    const handleSearch = (event) => {
        event.preventDefault();
        resetSearch();
    };

    const handleSelection = (selection) => {
        searchInput.current.value = selection;
        resetSearch();
    };

    return {
        images,
        page,
        totalPages,
        setPage,
        handleSearch,
        handleSelection,
        searchInput,
    };
};
