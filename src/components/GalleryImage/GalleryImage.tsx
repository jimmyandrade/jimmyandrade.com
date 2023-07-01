import { AsChildComponent } from '../../lib/types/AsChildComponent';
import { ImgHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

export interface GalleryImageProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    AsChildComponent {
  'data-aspect-square'?: boolean;
}

export const GalleryImage = forwardRef<HTMLImageElement, GalleryImageProps>(
  (
    { alt, asChild = false, className, draggable = false, ...props },
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'img';

    return (
      <Component
        alt={alt}
        className={classNames('w-full z-10', className)}
        draggable={draggable}
        {...props}
        ref={forwardedRef}
      />
    );
  }
);
GalleryImage.displayName = 'GalleryImage';
