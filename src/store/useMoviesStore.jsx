import axios from "axios";
import { create } from "zustand";
import { API_KEY, BASE_URL } from "../api/api";

export const useMoviesStore = create((set, get) => ({
  searchMovie: [],
  moviesPopular: [],
  moviesTrending: [],
  moviesTopRated: [],
  oneMovie: {},
  actorMovie: [],
  trailerMovie: [],
  detailActor: [],
  actorFameFor: [],
  similarMovies: [],
  recommendationsMovie: [],
  moviesPage: [],
  tvShowsPage: [],
  loader: false,
  error: null,
  mediaTypePopular: "movie",
  mediaTypeTopRated: "movie",
  timeWindow: "day",

  setMediaTypePopular: (type) => set({ mediaTypePopular: type }),
  setMediaTypeTopRated: (type) => set({ mediaTypeTopRated: type }),
  setTimeWindow: (window) => set({ timeWindow: window }),

  getSearchMovie: async (value) => {
    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`
      );
      set({ searchMovie: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getPopular: async () => {
    set({ loader: true, error: null });
    const { mediaTypePopular } = get();
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${mediaTypePopular}/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      set({ moviesPopular: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getTrending: async () => {
    set({ loader: true, error: null });
    const { timeWindow } = get();
    try {
      const { data } = await axios.get(
        `${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}`
      );
      set({ moviesTrending: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getTopRated: async () => {
    set({ loader: true, error: null });
    const { mediaTypeTopRated } = get();
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${mediaTypeTopRated}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      set({ moviesTopRated: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getDetails: async (id) => {
    const { mediaTypePopular, mediaTypeTopRated } = get();

    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${
          mediaTypePopular || mediaTypeTopRated
        }/${id}?api_key=${API_KEY}&language=en-US`
      );
      set({ oneMovie: data });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getActors: async (id) => {
    const { mediaTypePopular, mediaTypeTopRated } = get();

    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${
          mediaTypePopular || mediaTypeTopRated
        }/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      set({ actorMovie: data.cast });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getDetailActor: async (actorId) => {
    set({ loader: true, error: null });
    try {
      set({ loader: false });
      const { data } = await axios.get(
        `${BASE_URL}/person/${actorId}?api_key=${API_KEY}&language=en-US`
      );
      set({ detailActor: data });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getDetailActorFameFor: async (actorId) => {
    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/person/${actorId}/movie_credits?api_key=${API_KEY}&language=en-US`
      );
      set({ actorFameFor: data.cast });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getTrailerMovie: async (id) => {
    const { mediaTypePopular, mediaTypeTopRated } = get();

    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${
          mediaTypePopular || mediaTypeTopRated
        }/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      set({ trailer });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getDetailOfficialTrailer: async (id) => {
    const { mediaTypePopular, mediaTypeTopRated } = get();

    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${
          mediaTypePopular || mediaTypeTopRated
        }/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      set({ trailerMovie: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getSimilarMovies: async (id) => {
    const { mediaTypePopular, mediaTypeTopRated } = get();

    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${
          mediaTypePopular || mediaTypeTopRated
        }/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      );
      set({ similarMovies: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getRecommendationsMovies: async (id) => {
    const { mediaTypePopular, mediaTypeTopRated } = get();

    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${
          mediaTypePopular || mediaTypeTopRated
        }/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );
      set({ recommendationsMovie: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getMoviesPage: async () => {
    set({ loader: true, error: null });
    try {
      const { data } = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
      );
      set({ moviesPage: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },

  getTvShowsPage: async () => {
    try {
      const { data } =
        await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=18
`);
      set({ tvShowsPage: data.results });
    } catch (error) {
      console.error("Ошибка запроса:", error.message);
      set({ error: error.message });
    }
    set({ loader: false });
  },
}));
