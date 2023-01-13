import blogSchema from '../models/blog'
// import { NoDescriptionBlogEntry } from '../types'

export const getBlogEntriesWithoutDescription = () => {
    return blogSchema.find().then((result) => {
        return result.map(({ id, slug, title, brief, date, dateString, category, year }) => {
            return {
                id,
                slug,
                title,
                brief,
                dateString,
                date,
                category,
                year
            }
        }).sort((a: any, b: any) => { return b.date - a.date })
    }).catch((err) => console.log(err))
}

