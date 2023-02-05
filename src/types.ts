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
  slug: string
  category: string
  title: string
  brief: string
  description: string
  dateString: string
  date: Date
  year: string
}

export type NoDescriptionBlogEntry = Omit<BlogEntry, 'description'>
