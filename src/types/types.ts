export type game = {
  id: number,
  name: string,
  follows?: number,
  cover?: number, 
  cover_url?: string,
  summary?: string,
  first_release_date?: string,
  release_dates?: string,
  release_month?: number,
  release_human?: string,
  aggregated_rating?: number,
  artworks?: artwork[],
  screenshots?: screenshot[],
  storyline?: string,
  themes?: string[],
  similar_games?: string[],
  rating?: number,
  involved_companis?: string[],
  platforms?: platform[],
  genres?: genre[],
  categories?: string[],
  game_modes?: game_mode[],
}

type genre = {
  id: number,
  name: string,
}

type artwork = {
  id: number,
  url: string,
}

type screenshot = {
  id: number,
  url: string,
}

type platform = {
  id: number,
  name: string,
}

type game_mode = {
  id: number,
  name: string,
}