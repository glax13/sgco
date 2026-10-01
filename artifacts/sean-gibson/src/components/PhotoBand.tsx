interface PhotoBandProps {
  src: string;
  srcSet: string;
  alt: string;
  caption: string;
  /** Intrinsic size of the source, so the browser reserves the box before load. */
  width: number;
  height: number;
}

/**
 * The full-bleed 21/9 photograph band used on About, HPOS and Speaking.
 * Always below the fold, so it loads lazily. Sources are cropped to 21/9 at
 * build time by scripts/generate-images.sh, so object-cover has nothing left
 * to trim and no downloaded pixel goes unused.
 */
export function PhotoBand({ src, srcSet, alt, caption, width, height }: PhotoBandProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mb-24">
      <div className="w-full aspect-[21/9] overflow-hidden relative bg-card border border-hairline">
        <img
          src={src}
          srcSet={srcSet}
          sizes="(min-width: 1280px) 1232px, 100vw"
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-8 text-xs font-medium tracking-widest uppercase text-white/50">
          {caption}
        </div>
      </div>
    </section>
  );
}
