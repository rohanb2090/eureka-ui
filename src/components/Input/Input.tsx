import { forwardRef } from 'react';
import { useInput, UseInputProps } from '../../headless/Input';
import { inputVariants, InputVariantProps } from './Input.styles';
import { cn } from '../../utils/cn';

export interface InputProps extends UseInputProps, InputVariantProps {
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ size = 'md', className, ...props }, ref) => {
        const { inputProps, state } = useInput(props);

        return (
            <input
                ref={ref}
                {...inputProps}
                className={cn(
                    inputVariants({
                        size,
                        state: state.isInvalid ? 'invalid' : 'default',
                    }),
                    className
                )}
            />
        );
    }
);

Input.displayName = 'Input';
