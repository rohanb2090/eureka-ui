import { ReactNode, forwardRef } from 'react';
import { surfaceVariants, SurfaceVariantProps } from './Surface.styles';
import { cn } from '../../utils/cn';

export interface SurfaceProps extends SurfaceVariantProps {
    children: ReactNode;
    className?: string;
    as?: 'div' | 'section' | 'article' | 'aside';
}

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
    ({ variant = 'card', padding = 'md', as: Component = 'div', children, className }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(surfaceVariants({ variant, padding }), className)}
            >
                {children}
            </Component>
        );
    }
);

Surface.displayName = 'Surface';

// Card alias
export const Card = Surface;
