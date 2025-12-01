import Image from 'next/image'
import Link from 'next/link'

export default function PostCard({
  href,
  title,
  subtitle,
  img,
}: {
  href: string
  title: string
  subtitle?: string
  img?: string
}) {
  return (
    <Link
      href={href}
      className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group border border-gray-100"
    >
      {img ? (
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={1200}
            height={800}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Title overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <h3 className="font-fraunces text-3xl md:text-4xl text-white py-8 px-6 md:p-6 w-full leading-tight bg-black/30 backdrop-blur-[2px]">
              {title}
            </h3>
          </div>
        </div>
      ) : (
        <div className="relative h-[400px] w-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <h3 className="font-fraunces text-3xl md:text-4xl text-mutedpurple p-6 text-center leading-tight">
            {title}
          </h3>
        </div>
      )}
      {/* Excerpt below image */}
      {subtitle && (
        <div className="flex-1 py-8 px-6 md:p-6 bg-white group-hover:bg-sage/20 transition-colors duration-300">
          <p className="text-base text-mutedpurple/70 line-clamp-3 leading-relaxed">{subtitle}</p>
        </div>
      )}
    </Link>
  )
}