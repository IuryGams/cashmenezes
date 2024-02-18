'use client'
 
import Image from 'next/image'

interface ImageLoaderInterface{
    src: string;
    width: number;
    quality?: number
}
 
const imageLoader = ({ src, width, quality = 75 }: ImageLoaderInterface) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
 
export default function Page() {
  return (
    <Image
      loader={imageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}