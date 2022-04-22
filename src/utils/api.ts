import models from "@models";
import axios, { AxiosInstance } from "axios";

const API_ROOT = "https://rickandmortyapi.com/api/";

const api: AxiosInstance = axios.create({
  baseURL: API_ROOT,
  headers: {
    "content-type": "application/json",
    accept: "application/json"
  }
});

const instance = {
  characterSearch: (page: number = 1): Promise<models.CharacterSearchResults> => {
    return api.get(`character?page=${page}`).then(({ data }) => {
      return data;
    });
  }
};

export default instance;
