import { centerCrop, makeAspectCrop, PixelCrop } from 'react-image-crop'

export const centerAspectCrop = (
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) => {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

const TO_RADIANS = Math.PI / 180

export const canvasPreview = async (
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  rotate: number,
  scale: number,
  crop?: PixelCrop,
) => {
  const ctx = canvas.getContext('2d')

  if (!ctx) return

  const trueCrop = crop ?? {
    width: image.width,
    height: image.height,
    x: 0,
    y: 0,
  }

  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height

  // devicePixelRatio slightly increases sharpness on retina devices
  // at the expense of slightly slower render times and needing to
  // size the image back down if you want to download/upload and be
  // true to the images natural size.
  // But, it can make the size over the limit of the canvas, so setting pixelRatio to 1
  // const pixelRatio = Math.min(window.devicePixelRatio, 2)
  // const pixelRatio = window.devicePixelRatio
  const pixelRatio = 1

  canvas.width = Math.floor(trueCrop.width * scaleX * pixelRatio)
  canvas.height = Math.floor(trueCrop.height * scaleY * pixelRatio)

  // ctx.rotate((rotate * Math.PI) / 180)
  //ctx.scale(pixelRatio, pixelRatio)
  ctx.imageSmoothingQuality = 'high'

  const cropX = trueCrop.x * scaleX * pixelRatio // multiple by pixelRatio?
  const cropY = trueCrop.y * scaleY * pixelRatio // multiple by pixelRatio?

  const rotateRads = rotate * TO_RADIANS
  const centerX = image.naturalWidth / 2
  const centerY = image.naturalHeight / 2

  ctx.save()

  // 5) Move the trueCrop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY)

  // 4) Move the origin to the center of the original position
  ctx.translate(centerX, centerY)

  // 3) Rotate around the origin
  ctx.rotate(rotateRads)

  // 2) Scale the image
  ctx.scale(scale, scale)

  // 1) Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY)

  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
  )

  ctx.restore()
}
