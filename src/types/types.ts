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
}