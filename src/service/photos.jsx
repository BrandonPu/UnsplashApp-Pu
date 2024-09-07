import axios from "axios";

const api_url = "https://api.unsplash.com/search/photos";
const api_key = "6tOqAl-YztQRG63Z2z5_-Cg5enhdGP1d0mFT0oPElaQ";
const images_per_page = 20;

export const photos = async (query, page) => {
    try {
        const { data } = await axios.get(`${api_url}?query=${query}&page=${page}&per_page=${images_per_page}&client_id=${api_key}`);
        return {
            results: data.results,
            totalPages: data.total_pages,
        };
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};
