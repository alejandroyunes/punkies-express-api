import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
// export const getEntries = () => diaries

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => +d.id === id)

    if (entry != null) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined
}

export const getEntriesWithoutSentitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}


export const findBlog = (): any => {
    
}

export const addEntry = () => diaries