import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'rideReview',
  title: 'Ride Review',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'destination', type: 'string' }),
    defineField({ name: 'operator', type: 'string' }),
    defineField({ name: 'pricePerDay', type: 'number' }),
    defineField({
      name: 'riderLevel',
      type: 'string',
      options: { list: ['Beginner', 'Intermediate', 'Advanced', 'Mixed'] },
    }),
    defineField({ name: 'hoursInSaddle', type: 'number' }),
    defineField({ name: 'bestSeason', type: 'string' }),
    defineField({ name: 'heroImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'quickVerdict', type: 'text' }),

    // Rich sections (Portable Text)
    defineField({ name: 'gettingThere', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'horsesAndTack', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'rideExperience', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'accommodationFood', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'safetyInsurance', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'pointsTips', type: 'array', of: [{ type: 'block' }] }),

    defineField({ name: 'pros', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'cons', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
})