import axios from "axios";

const BASE_URL = "https://qtify-backend-labs.crio.do";

export const getTopAlbums = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Something went wrong", error);
    throw error;
  }
};

export const getNewAlbums = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Something went wrong", error);
    throw error;
  }
};
