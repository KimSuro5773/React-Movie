import axios from "axios";
import { API_CONFIG } from "./config";

export const client = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },

  params: {
    language: "ko-KR",
    region: "KR",
  },
});
