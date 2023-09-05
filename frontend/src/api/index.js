import axios from "axios";
const axiosApi = axios.create({
    baseURL: "localhost:8000/api/v1/cats",
});

export const fetchBreeds = async () => {
    return axiosApi("/breeds");
};
export const fetchBreedNames = async () => {
    return axiosApi("/breeds_name");
};
export const fetchBreed = async (breedId) => {
    return axiosApi(`/breeds/${breedId}`);
};
