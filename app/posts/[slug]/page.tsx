import {client} from '../../../lib/sanity.client'
import {PortableText} from '@portabletext/react'
import {groq} from 'next-sanity'
import Image from 'next/image'
import Gallery from '../../components/Gallery'
import Accordion from '../../components/Accordion'

const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    postType,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    destination,
    operator,
    whenIWent,
    bookingInfo,
    pricePerDay,
    priceNotes,
    totalDays,
    ridingDays,
    riderLevel,
    hoursInSaddle,
    rideType,
    bestSeason,
    availableMonths,
    quickVerdict,
    gettingThere,
    horsesAndTack,
    rideExperience,
    accommodationFood,
    safetyInsurance,
    pointsTips,
    groupAccommodation,
    pros,
    cons,
    overallRating,
    horsesAndTackRating,
    rideExperienceRating,
    accommodationFoodRating,
    valueRating,
    valueForMoneyDescription,
    finalVerdict,
    affiliateLinks,
    gallery[]{
      image{
        asset->{
          _id,
          url
        }
      },
      alt,
      caption
    }
  }`

interface PostPageProps {
  params: Promise<{slug: string}>
}

export default async function PostPage({params}: PostPageProps) {
  const {slug} = await params
  const post = await client.fetch(postQuery, {slug})

  if (!post) {
    return <p>Post not found</p>
  }

  // Helper to render star ratings (with half-star support)
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          const isFull = i < Math.floor(rating)
          const isHalf = i < rating && i >= Math.floor(rating)
          return (
            <span key={i} className={isFull || isHalf ? 'text-yellow-500' : 'text-gray-300'}>
              {isHalf ? '★' : '★'}
            </span>
          )
        })}
        <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
      </div>
    )
  }

  // PortableText components for custom rendering
  const portableTextComponents = {
    marks: {
      link: ({children, value}: any) => {
        const target = value?.href?.startsWith('http') ? '_blank' : undefined
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="text-tealpop hover:underline"
          >
            {children}
          </a>
        )
      },
    },
    block: {
      normal: ({children}: any) => <p className="mb-4">{children}</p>,
    },
  }

  return (
    <article className="prose mx-auto text-deepgreen max-w-5xl">
      <div className="px-6 pt-6">
        <h1 className="text-terracotta font-fraunces mb-4 text-center">{post.title}</h1>
      </div>

      {/* Main Image */}
      {post.mainImage && (
        <div className="px-6">
          <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <div className="px-6 pb-6">

      {post.postType === 'rideReview' ? (
        <>
          {/* Key Details Box */}
          <div className="not-prose bg-terracotta/5 border border-terracotta/20 rounded-lg p-8 mb-12 grid grid-cols-2 md:grid-cols-3 gap-6 shadow-sm">
            {post.destination && (
              <div>
                <p className="text-sm text-gray-600">Destination</p>
                <p className="font-semibold">{post.destination}</p>
              </div>
            )}
            {post.operator && (
              <div>
                <p className="text-sm text-gray-600">Operator</p>
                <p className="font-semibold">{post.operator}</p>
              </div>
            )}
            {post.whenIWent && (
              <div>
                <p className="text-sm text-gray-600">When I Went</p>
                <p className="font-semibold">{post.whenIWent}</p>
              </div>
            )}
            {post.pricePerDay && (
              <div>
                <p className="text-sm text-gray-600">Price Per Day</p>
                <p className="font-semibold">${post.pricePerDay}</p>
                {post.priceNotes && <p className="text-xs text-gray-500 mt-1">{post.priceNotes}</p>}
              </div>
            )}
            {post.totalDays && (
              <div>
                <p className="text-sm text-gray-600">Total Days</p>
                <p className="font-semibold">{post.totalDays} days</p>
              </div>
            )}
            {post.ridingDays && (
              <div>
                <p className="text-sm text-gray-600">Riding Days</p>
                <p className="font-semibold">{post.ridingDays} days</p>
              </div>
            )}
            {post.hoursInSaddle && (
              <div>
                <p className="text-sm text-gray-600">Hours in Saddle</p>
                <p className="font-semibold">{post.hoursInSaddle} hrs/day</p>
              </div>
            )}
            {post.riderLevel && post.riderLevel.length > 0 && (
              <div>
                <p className="text-sm text-gray-600">Rider Level</p>
                <p className="font-semibold">{post.riderLevel.join(', ')}</p>
              </div>
            )}
            {post.bestSeason && post.bestSeason.length > 0 && (
              <div>
                <p className="text-sm text-gray-600">Best Season</p>
                <p className="font-semibold capitalize">{post.bestSeason.join(', ')}</p>
              </div>
            )}
          </div>

          {/* Overall Rating */}
          {post.overallRating && (
            <div className="not-prose mb-12 text-center">
              <h2 className="text-3xl font-fraunces text-terracotta mb-3">Overall Rating</h2>
              <div className="flex items-center justify-center text-5xl">
                {renderStars(post.overallRating)}
              </div>
            </div>
          )}

          {/* Ratings */}
          {(post.horsesAndTackRating || post.rideExperienceRating || post.accommodationFoodRating || post.valueRating) && (
            <div className="not-prose mb-12">
              <h2 className="text-2xl font-fraunces text-terracotta mb-6">Ratings</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {post.horsesAndTackRating && (
                  <a href="#horses-tack" className="bg-amber-50 border border-amber-200/50 rounded-lg p-4 hover:bg-amber-100 transition-colors cursor-pointer block no-underline">
                    <p className="font-semibold mb-2 text-amber-900">Horses & Tack</p>
                    {renderStars(post.horsesAndTackRating)}
                  </a>
                )}
                {post.rideExperienceRating && (
                  <a href="#ride-experience" className="bg-emerald-50 border border-emerald-200/50 rounded-lg p-4 hover:bg-emerald-100 transition-colors cursor-pointer block no-underline">
                    <p className="font-semibold mb-2 text-emerald-900">Ride Experience</p>
                    {renderStars(post.rideExperienceRating)}
                  </a>
                )}
                {post.accommodationFoodRating && (
                  <a href="#accommodation-food" className="bg-blue-50 border border-blue-200/50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer block no-underline">
                    <p className="font-semibold mb-2 text-blue-900">Accommodation & Food</p>
                    {renderStars(post.accommodationFoodRating)}
                  </a>
                )}
                {post.valueRating && (
                  <a href="#value-for-money" className="bg-purple-50 border border-purple-200/50 rounded-lg p-4 hover:bg-purple-100 transition-colors cursor-pointer block no-underline">
                    <p className="font-semibold mb-2 text-purple-900">Value for Money</p>
                    {renderStars(post.valueRating)}
                  </a>
                )}
              </div>
            </div>
          )}

          {post.quickVerdict && (
            <div className="mb-8 bg-sage/30 border border-deepgreen/20 rounded-lg p-6">
              <h2 className="text-terracotta mb-4">Quick Verdict</h2>
              <div className="text-lg leading-relaxed">
                <PortableText value={post.quickVerdict} components={portableTextComponents} />
              </div>
            </div>
          )}

          {/* Photo Gallery */}
          {post.gallery && post.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-fraunces text-terracotta mb-6">Photo Gallery ({post.gallery.length} photos)</h2>
              <Gallery images={post.gallery} />
            </div>
          )}

          {/* Main Narrative Sections */}
          {post.horsesAndTack && (
            <div id="horses-tack" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-fraunces text-terracotta">Horses and Tack</h2>
                {post.horsesAndTackRating && (
                  <div className="flex items-center gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < post.horsesAndTackRating ? 'text-yellow-500' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <PortableText value={post.horsesAndTack} components={portableTextComponents} />
            </div>
          )}

          {post.rideExperience && (
            <div id="ride-experience" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-fraunces text-terracotta">Ride Experience</h2>
                {post.rideExperienceRating && (
                  <div className="flex items-center gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < post.rideExperienceRating ? 'text-yellow-500' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <PortableText value={post.rideExperience} components={portableTextComponents} />
            </div>
          )}

          {post.accommodationFood && (
            <div id="accommodation-food" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-fraunces text-terracotta">Accommodation & Food</h2>
                {post.accommodationFoodRating && (
                  <div className="flex items-center gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < post.accommodationFoodRating ? 'text-yellow-500' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <PortableText value={post.accommodationFood} components={portableTextComponents} />
            </div>
          )}

          {post.valueForMoneyDescription && (
            <div id="value-for-money" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-fraunces text-terracotta">Value for Money</h2>
                {post.valueRating && (
                  <div className="flex items-center gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < post.valueRating ? 'text-yellow-500' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <PortableText value={post.valueForMoneyDescription} components={portableTextComponents} />
            </div>
          )}

          {/* Supplementary Info - Keep Collapsible */}
          {post.gettingThere && (
            <Accordion title="Getting There" defaultOpen={false}>
              <PortableText value={post.gettingThere} components={portableTextComponents} />
            </Accordion>
          )}

          {post.safetyInsurance && (
            <Accordion title="Safety & Insurance" defaultOpen={false}>
              <PortableText value={post.safetyInsurance} components={portableTextComponents} />
            </Accordion>
          )}

          {post.pointsTips && (
            <Accordion title="Points & Tips" defaultOpen={false}>
              <PortableText value={post.pointsTips} components={portableTextComponents} />
            </Accordion>
          )}

          {post.groupAccommodation && (
            <Accordion title="Non-Riders & Mixed Partner Levels" defaultOpen={false}>
              <PortableText value={post.groupAccommodation} components={portableTextComponents} />
            </Accordion>
          )}

          {(post.pros || post.cons) && (
            <div className="mb-8 border border-deepgreen/20 rounded-lg p-6">
              <h2 className="text-terracotta mb-4">Pros & Cons</h2>
              {post.pros && post.pros.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-green-700">Pros</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {post.pros.map((pro: string, i: number) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
              )}
              {post.cons && post.cons.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-red-700">Cons</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {post.cons.map((con: string, i: number) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {post.finalVerdict && (
            <div className="mb-8 bg-sage/30 border border-deepgreen/20 rounded-lg p-6">
              <h2 className="text-terracotta mb-4">Final Verdict</h2>
              <div className="text-lg leading-relaxed">
                <PortableText value={post.finalVerdict} components={portableTextComponents} />
              </div>
            </div>
          )}

          {/* Affiliate Links */}
          {post.affiliateLinks && post.affiliateLinks.length > 0 && (
            <div className="not-prose bg-amber-50/30 border border-amber-200/50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-fraunces text-terracotta mb-4">Recommended Gear & Resources</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {post.affiliateLinks.map((item: any, i: number) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white/50 rounded border border-amber-200/30 hover:bg-white transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-deepgreen">{item.product}</p>
                      <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                    </div>
                    <span className="text-tealpop">→</span>
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">
                * Some links may be affiliate links. We may earn a commission at no extra cost to you.
              </p>
            </div>
          )}

          {/* Booking Information */}
          {post.bookingInfo && (
            <div className="not-prose bg-blue-50/50 border border-blue-200/50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-fraunces text-terracotta mb-4">Booking Information</h2>
              <div className="space-y-2">
                {post.bookingInfo.website && (
                  <div>
                    <span className="text-sm text-gray-600">Website: </span>
                    <a href={post.bookingInfo.website} target="_blank" rel="noopener noreferrer" className="text-tealpop hover:underline">
                      {post.bookingInfo.website}
                    </a>
                  </div>
                )}
                {post.bookingInfo.email && (
                  <div>
                    <span className="text-sm text-gray-600">Email: </span>
                    <a href={`mailto:${post.bookingInfo.email}`} className="text-tealpop hover:underline">
                      {post.bookingInfo.email}
                    </a>
                  </div>
                )}
                {post.bookingInfo.bookingNotes && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-700">{post.bookingInfo.bookingNotes}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <PortableText value={post.body} components={portableTextComponents} />
          {post.gallery && post.gallery.length > 0 && <Gallery images={post.gallery} />}
        </>
      )}
      </div>
    </article>
  )
}
