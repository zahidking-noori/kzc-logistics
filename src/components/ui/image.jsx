import * as React from "react"
import { cn } from "@/lib/utils"

const FALLBACK_IMAGE_URL =
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800"

/**
 * Image component — renders a responsive <img> with lazy loading and
 * graceful fallback on error. Accepts the same props as a plain <img>
 * plus optional fittingType/focalPoint/quality props that are accepted
 * for backwards compatibility but have no effect on rendering.
 */
const Image = React.forwardRef(
  (
    {
      src,
      fittingType,
      originWidth,
      originHeight,
      focalPointX,
      focalPointY,
      quality,
      className,
      alt = "",
      ...props
    },
    ref
  ) => {
    const [imgSrc, setImgSrc] = React.useState(src)

    React.useEffect(() => {
      setImgSrc(src)
    }, [src])

    if (!src) {
      return (
        <img
          ref={ref}
          src={FALLBACK_IMAGE_URL}
          alt={alt}
          className={className}
          {...props}
          data-empty-image
        />
      )
    }

    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt}
        className={cn(className)}
        loading="lazy"
        onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
        {...props}
      />
    )
  }
)
Image.displayName = "Image"

export { Image }