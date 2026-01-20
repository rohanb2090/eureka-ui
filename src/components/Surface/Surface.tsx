import { ReactNode, forwardRef, CSSProperties } from 'react';
import { surfaceVariants, SurfaceVariantProps } from './Surface.styles';
import { cn } from '../../utils/cn';

export interface SurfaceProps extends SurfaceVariantProps {
    children: ReactNode;
    className?: string;
    as?: 'div' | 'section' | 'article' | 'aside';
    style?: CSSProperties;
}

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
    ({ variant = 'card', padding = 'md', as: Component = 'div', children, className, style }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(surfaceVariants({ variant, padding }), className)}
                style={style}
            >
                {children}
            </Component>
        );
    }
);

Surface.displayName = 'Surface';

// Card alias
export const Card = Surface;
