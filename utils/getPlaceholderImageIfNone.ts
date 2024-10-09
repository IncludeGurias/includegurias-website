function getPlaceholderImageIfNone(imageUrl: string | undefined, width: number = 600, height: number = 400): string {
  if (!imageUrl || imageUrl === "#") {
    return `https://placehold.co/${width}x${height}`
  } else {
    return imageUrl
  }
}

export default getPlaceholderImageIfNone
