export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"
export type Visibility = "great" | "good" | "okay" | "poor" | "dangerous"

export interface DiaryEntry {
  id: string
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id', 'date', 'weather', 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>


export interface BlogEntry {
  id: string
  slug: string
  title: string
  brief: Weather
  description: Visibility
  date: string
}

export type NoDescriptionBlogEntry = Omit<BlogEntry, 'description'>
