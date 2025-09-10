import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post', 
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: ({
                source: 'title',
                maxLength: 96
            }),
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        })
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage'
        }
    }
})