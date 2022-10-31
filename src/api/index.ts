export const API = "https://api.themoviedb.org/3";

type MediaType = "all" | "movie" | "tv" | "person";

type TimeWindow = "day" | "week";

type Options = {
  mediaType: MediaType;
  timeWindow: TimeWindow;
};

export type Media = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};

export const getTrending = async (
  apiKey: string,
  { mediaType, timeWindow }: Options = {
    mediaType: "tv",
    timeWindow: "week",
  }
) => {
  const response = await fetch(
    `${API}/trending/${mediaType}/${timeWindow}?api_key=${apiKey}`
  );

  const data = await response.json();
  return data;
};

export const searchByGenreAndYear = async (apiKey: string, query: string) => {
  const response = await fetch(
    `${API}/search/multi?api_key=${apiKey}&query=${encodeURI(query)}`
  );

  const data = await response.json();
  return data;
};
