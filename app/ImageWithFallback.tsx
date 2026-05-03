import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
}

export default function ImageWithFallback({ src, alt, className, onClick, width = 400, height = 300 }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc('/inicio.jpeg');
      setHasError(true);
    }
  };

  const isWidthString = typeof width === 'string';
  const isHeightString = typeof height === 'string';

  if (isWidthString || isHeightString) {
    // Usar fill cuando width o height son strings (ej. "100%")
    return (
      <div
        className={className}
        style={{
          position: 'relative',
          width: isWidthString ? width : 'auto',
          height: isHeightString ? height : 'auto',
        }}
        onClick={onClick}
      >
        <Image
          src={imgSrc}
          alt={alt}
          fill
          style={{ objectFit: 'fill' }}
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      onClick={onClick}
      onError={handleError}
      width={width as number}
      height={height as number}
      style={{ width: 'auto', height: 'auto' }}
    />
  );
}
   
