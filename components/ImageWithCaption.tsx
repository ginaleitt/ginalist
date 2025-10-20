import Image from 'next/image';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export default function ImageWithCaption({
  src,
  alt,
  caption,
  width = 800,
  height = 600,
}: ImageWithCaptionProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-600 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}