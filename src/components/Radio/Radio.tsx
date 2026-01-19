import { forwardRef, ReactNode } from 'react';
import { useRadio, useRadioGroup, UseRadioProps, UseRadioGroupProps } from '../../headless/Radio';
import { radioVariants, RadioVariantProps } from './Radio.styles';
import { cn } from '../../utils/cn';

export interface RadioProps extends UseRadioProps, RadioVariantProps {
    className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ size = 'md', className, ...props }, ref) => {
        const { inputProps, state } = useRadio(props);

        return (
            <input
                ref={ref}
                {...inputProps}
                className={cn(
                    radioVariants({
                        size,
                        state: state.isInvalid ? 'invalid' : 'default',
                    }),
                    className
                )}
            />
        );
    }
);

Radio.displayName = 'Radio';

// RadioGroup component for convenience
export interface RadioGroupProps extends UseRadioGroupProps {
    children: ReactNode;
    className?: string;
}

export function RadioGroup({ children, className, ...props }: RadioGroupProps) {
    const { groupProps } = useRadioGroup(props);

    return (
        <div {...groupProps} className={cn('space-y-2', className)}>
            {children}
        </div>
    );
}
