import blogSchema from '../models/blog'

export const getBlogEntriesWithoutDescription = () => {
    const blog = blogSchema.find().then((result) => {
        return result.map(({ id, slug, title, brief, date }) => {
            return {
                id,
                slug,
                title,
                brief,
                date
            }
        })
    }).catch((err) => console.log(err))

    return blog

}