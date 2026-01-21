import { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { surfaceVariants, SurfaceVariantProps } from './Surface.styles';
import { cn } from '../../utils/cn';

export interface SurfaceProps extends SurfaceVariantProps, HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    as?: 'div' | 'section' | 'article' | 'aside';
}

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
    ({ variant = 'card', padding = 'md', as: Component = 'div', children, className, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(surfaceVariants({ variant, padding }), className)}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Surface.displayName = 'Surface';

// Card alias
export const Card = Surface;
