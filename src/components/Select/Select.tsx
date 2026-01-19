import { forwardRef } from 'react';
import { useSelect, UseSelectProps } from '../../headless/Select';
import { selectVariants, SelectVariantProps } from './Select.styles';
import { cn } from '../../utils/cn';

export interface SelectProps extends UseSelectProps, SelectVariantProps {
    className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ size = 'md', options, placeholder, className, ...props }, ref) => {
        const { selectProps, state } = useSelect({ options, placeholder, ...props });

        return (
            <select
                ref={ref}
                {...selectProps}
                className={cn(
                    selectVariants({
                        size,
                        state: state.isInvalid ? 'invalid' : 'default',
                    }),
                    className
                )}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.isDisabled}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }
);

Select.displayName = 'Select';
