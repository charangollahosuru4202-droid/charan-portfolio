import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatioClass?: string;
  loading?: 'lazy' | 'eager';
}

export default function ImageWithFallback({
  src,
  fallbackSrc = '/images/profile.svg',
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  aspectRatioClass = 'aspect-4/5',
  loading = 'lazy',
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 dark:bg-slate-900 ${aspectRatioClass} ${containerClassName}`}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
      )}

      {/* Main Image */}
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
