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
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'postType',
            title: 'Post Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Ride Review', value: 'rideReview' },
                    { title: 'Shopping Guide', value: 'shoppingGuide' },
                    { title: 'General Article', value: 'article' }
                ]
            },
            validation: (Rule) => Rule.required(),
            description: 'Select the type of post to show relevant fields'
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
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            description: 'A brief description of the post for previews'
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            hidden: ({document}) => document?.postType === 'rideReview'
        }),

        // Ride Review specific fields
        defineField({
            name: 'destination',
            title: 'Destination',
            type: 'string',
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'operator',
            title: 'Operator',
            type: 'string',
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'pricePerDay',
            title: 'Price Per Day',
            type: 'number',
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'riderLevel',
            title: 'Rider Level',
            type: 'string',
            options: {
                list: ['Beginner', 'Intermediate', 'Advanced', 'Mixed']
            },
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'hoursInSaddle',
            title: 'Hours in Saddle',
            type: 'number',
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'bestSeason',
            title: 'Best Season',
            type: 'string',
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'quickVerdict',
            title: 'Quick Verdict',
            type: 'text',
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'gettingThere',
            title: 'Getting There',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'horsesAndTack',
            title: 'Horses and Tack',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'rideExperience',
            title: 'Ride Experience',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'accommodationFood',
            title: 'Accommodation & Food',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'safetyInsurance',
            title: 'Safety & Insurance',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'pointsTips',
            title: 'Points & Tips',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'groupAccommodation',
            title: 'Group Accommodation',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Discuss how the ride accommodates non-riding partners, different skill levels, or mixed groups'
        }),
        defineField({
            name: 'pros',
            title: 'Pros',
            type: 'array',
            of: [{ type: 'string' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'cons',
            title: 'Cons',
            type: 'array',
            of: [{ type: 'string' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image' }],
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),

        // Rating fields for ride reviews
        defineField({
            name: 'horsesAndTackRating',
            title: 'Horses & Tack Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5).integer(),
            options: {
                list: [
                    { title: '1 Star', value: 1 },
                    { title: '2 Stars', value: 2 },
                    { title: '3 Stars', value: 3 },
                    { title: '4 Stars', value: 4 },
                    { title: '5 Stars', value: 5 }
                ]
            },
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Rate the quality of horses and equipment (1-5 stars)'
        }),
        defineField({
            name: 'rideExperienceRating',
            title: 'Ride Experience Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5).integer(),
            options: {
                list: [
                    { title: '1 Star', value: 1 },
                    { title: '2 Stars', value: 2 },
                    { title: '3 Stars', value: 3 },
                    { title: '4 Stars', value: 4 },
                    { title: '5 Stars', value: 5 }
                ]
            },
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Rate the overall riding experience (1-5 stars)'
        }),
        defineField({
            name: 'accommodationFoodRating',
            title: 'Accommodation & Food Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5).integer(),
            options: {
                list: [
                    { title: '1 Star', value: 1 },
                    { title: '2 Stars', value: 2 },
                    { title: '3 Stars', value: 3 },
                    { title: '4 Stars', value: 4 },
                    { title: '5 Stars', value: 5 }
                ]
            },
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Rate the accommodation and food quality (1-5 stars)'
        }),
        defineField({
            name: 'valueRating',
            title: 'Value for Money Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5).integer(),
            options: {
                list: [
                    { title: '1 Star', value: 1 },
                    { title: '2 Stars', value: 2 },
                    { title: '3 Stars', value: 3 },
                    { title: '4 Stars', value: 4 },
                    { title: '5 Stars', value: 5 }
                ]
            },
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Rate whether the ride was worth the cost (1-5 stars)'
        })
    ],

    preview: {
        select: {
            title: 'title',
            postType: 'postType',
            media: 'mainImage'
        },
        prepare(selection) {
            const {title, postType, media} = selection
            const postTypeLabel = postType === 'rideReview' ? 'Ride Review' : 
                                 postType === 'shoppingGuide' ? 'Shopping Guide' : 
                                 'Article'
            return {
                title: title,
                subtitle: postTypeLabel,
                media: media
            }
        }
    }
})