import Avatar from "boring-avatars"
import Image from "next/image"
import Link from "next/link"
import { FaQuoteLeft } from "react-icons/fa"
import { TestimonialType } from "types/TestimonialType"

interface TestimonialProps {
  testimonial: TestimonialType
  className?: string
}

const TestimonialsCard = ({
  testimonial: { testimonial, name, sublegend, sublegendHref, avatar, color },
  className,
}: TestimonialProps) => {
  return (
    <div
      className={`${
        className ? { className } : ""
      } relative flex h-full w-full flex-col justify-between rounded-lg bg-gray-100 p-4 text-gray-700 shadow`}
    >
      <div>
        <FaQuoteLeft size={30} color={color} />
        <div id="text" className="mt-2">
          {testimonial}
        </div>
      </div>
      <div>
        <div className={`mx-auto w-full border border-${color}-500 my-8`} />
        <div className="flex items-center">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-400">
            {avatar === null ? (
              <Avatar
                size={50}
                name={name}
                variant="beam"
                colors={["#FFD700", "#FF8C00", "#FF4500", "#FF6347", "#FF0000"]}
              />
            ) : (
              <Image
                src={avatar}
                alt={name + " avatar"}
                fill
                sizes="50px, 50px"
                className="rounded-full object-cover"
              />
            )}
          </div>
          <div className="ml-4">
            <div id="text" className="font-bold">
              {name}
            </div>
            <div className="mt-1 text-sm text-gray-600">
              <Link
                href={sublegendHref}
                id="text"
                className={`${sublegendHref !== "#" ? "hover:text-blue-500 hover:underline" : "cursor-default"}`}
              >
                {sublegend}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCard
