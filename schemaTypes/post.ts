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
            name: 'author',
            title: 'Author',
            type: 'string',
            initialValue: 'Kamilla',
            description: 'Post author name'
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Feature this post on the homepage',
            initialValue: false
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Europe', value: 'europe' },
                    { title: 'South America', value: 'southAmerica' },
                    { title: 'Africa', value: 'africa' },
                    { title: 'Asia', value: 'asia' },
                    { title: 'North America', value: 'northAmerica' },
                    { title: 'Central America', value: 'centralAmerica' }
                ]
            },
            description: 'Select one or more categories for this post'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            hidden: ({document}) => document?.postType === 'rideReview'
        }),
        defineField({
            name: 'affiliateDisclosure',
            title: 'Affiliate Disclosure',
            type: 'boolean',
            initialValue: false,
            hidden: ({document}) => document?.postType !== 'shoppingGuide',
            description: 'Enable if this post contains affiliate links'
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
            name: 'whenIWent',
            title: 'When I Went',
            type: 'string',
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Month and year of your visit (e.g., \'July 2024\')'
        }),
        defineField({
            name: 'bookingInfo',
            title: 'Booking Information',
            type: 'object',
            hidden: ({document}) => document?.postType !== 'rideReview',
            fields: [
                {
                    name: 'website',
                    title: 'Website',
                    type: 'url'
                },
                {
                    name: 'email',
                    title: 'Email',
                    type: 'string'
                },
                {
                    name: 'bookingNotes',
                    title: 'Booking Notes',
                    type: 'text',
                    rows: 2
                }
            ]
        }),
        defineField({
            name: 'pricePerDay',
            title: 'Price Per Day',
            type: 'number',
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Average or starting price per day'
        }),
        defineField({
            name: 'priceNotes',
            title: 'Price Notes',
            type: 'text',
            rows: 2,
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Explain pricing variations (e.g., different rates for different trip lengths)'
        }),
        defineField({
            name: 'totalDays',
            title: 'Total Days',
            type: 'number',
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Total duration of the tour/trip'
        }),
        defineField({
            name: 'ridingDays',
            title: 'Riding Days',
            type: 'number',
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Number of days actually spent riding'
        }),
        defineField({
            name: 'riderLevel',
            title: 'Rider Level',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Beginner', value: 'Beginner' },
                    { title: 'Intermediate', value: 'Intermediate' },
                    { title: 'Advanced', value: 'Advanced' },
                    { title: 'Mixed', value: 'Mixed' }
                ]
            },
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Select one or more rider experience levels suitable for this ride'
        }),
        defineField({
            name: 'hoursInSaddle',
            title: 'Hours in Saddle',
            type: 'number',
            hidden: ({document}) => document?.postType !== 'rideReview'
        }),
        defineField({
            name: 'rideType',
            title: 'Ride Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Multi-Day Trip', value: 'multiDay' },
                    { title: 'Day Ride', value: 'dayRide' }
                ]
            },
            initialValue: 'multiDay',
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Select whether this is a multi-day trip or a day ride'
        }),
        defineField({
            name: 'bestSeason',
            title: 'Best Season',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Spring', value: 'spring' },
                    { title: 'Summer', value: 'summer' },
                    { title: 'Fall', value: 'fall' },
                    { title: 'Winter', value: 'winter' }
                ]
            },
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Select one or more seasons suitable for this ride. NOTE: If you see errors, this field was changed from string to array - please re-save this document to migrate the data.'
        }),
        defineField({
            name: 'availableMonths',
            title: 'Available Months',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'January', value: 'january' },
                    { title: 'February', value: 'february' },
                    { title: 'March', value: 'march' },
                    { title: 'April', value: 'april' },
                    { title: 'May', value: 'may' },
                    { title: 'June', value: 'june' },
                    { title: 'July', value: 'july' },
                    { title: 'August', value: 'august' },
                    { title: 'September', value: 'september' },
                    { title: 'October', value: 'october' },
                    { title: 'November', value: 'november' },
                    { title: 'December', value: 'december' }
                ]
            },
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Select which months this ride is available'
        }),
        defineField({
            name: 'quickVerdict',
            title: 'Quick Verdict',
            type: 'array',
            of: [{ type: 'block' }],
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
            hidden: ({document}) => document?.postType !== 'rideReview' || document?.rideType === 'dayRide',
            description: 'Only applicable for multi-day trips'
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
            of: [{
                type: 'object',
                name: 'galleryImage',
                fields: [
                    {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: { hotspot: true },
                        validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'alt',
                        title: 'Alt Text',
                        type: 'string',
                        description: 'Describe the image for screen readers (required for accessibility)',
                        validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'caption',
                        title: 'Caption',
                        type: 'string',
                        description: 'Optional short caption to display below the image'
                    }
                ],
                preview: {
                    select: {
                        title: 'caption',
                        media: 'image'
                    },
                    prepare(selection) {
                        const {title, media} = selection
                        return {
                            title: title || 'No caption',
                            media: media
                        }
                    }
                }
            }],
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Add images for the lightbox gallery carousel'
        }),

        // Rating fields for ride reviews
        defineField({
            name: 'overallRating',
            title: 'Overall Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5).precision(0.5),
            options: {
                list: [
                    { title: '1 Star', value: 1 },
                    { title: '1.5 Stars', value: 1.5 },
                    { title: '2 Stars', value: 2 },
                    { title: '2.5 Stars', value: 2.5 },
                    { title: '3 Stars', value: 3 },
                    { title: '3.5 Stars', value: 3.5 },
                    { title: '4 Stars', value: 4 },
                    { title: '4.5 Stars', value: 4.5 },
                    { title: '5 Stars', value: 5 }
                ]
            },
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Your overall rating out of 5 stars (allows half stars)'
        }),
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
            hidden: ({document}) => document?.postType !== 'rideReview' || document?.rideType === 'dayRide',
            description: 'Rate the accommodation and food quality (1-5 stars) - only for multi-day trips'
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
        }),
        defineField({
            name: 'valueForMoneyDescription',
            title: 'Value for Money Description',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Explain why the ride is or isn\'t good value for money'
        }),
        defineField({
            name: 'finalVerdict',
            title: 'Final Verdict',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({document}) => document?.postType !== 'rideReview',
            description: 'Your overall conclusion and recommendation for this ride'
        }),
        defineField({
            name: 'affiliateLinks',
            title: 'Affiliate Links',
            type: 'array',
            hidden: ({document}) => document?.postType !== 'rideReview',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'product',
                        title: 'Product Name',
                        type: 'string'
                    },
                    {
                        name: 'link',
                        title: 'Affiliate Link',
                        type: 'url'
                    },
                    {
                        name: 'category',
                        title: 'Category',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Gear', value: 'gear' },
                                { title: 'Booking', value: 'booking' },
                                { title: 'Travel', value: 'travel' },
                                { title: 'Other', value: 'other' }
                            ]
                        }
                    }
                ]
            }]
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