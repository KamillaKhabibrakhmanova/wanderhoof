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
      className="block rounded-2xl overflow-hidden border-gray-200 border hover:shadow-md hover:bg-sage transition-all duration-200 hover:border-gray-300 post-card-bg"
    >
      {img && (
        <Image
          src={img}
          alt=""
          width={800}
          height={500}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-fraunces text-xl text-mutedpurple mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-mutedpurple/70 line-clamp-3">{subtitle}</p>
        )}
      </div>
    </Link>
  )
}