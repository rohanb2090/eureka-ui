import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
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
            <div className={cn('relative w-full', className)}>
                <select
                    ref={ref}
                    {...selectProps}
                    className={selectVariants({
                        size,
                        state: state.isInvalid ? 'invalid' : 'default',
                        className: cn('appearance-none pr-10'), // pr-10 (40px) matches icon space
                    })}
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
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-tertiary">
                    <ChevronDown size={16} />
                </div>
            </div>
        );
    }
);

Select.displayName = 'Select';
