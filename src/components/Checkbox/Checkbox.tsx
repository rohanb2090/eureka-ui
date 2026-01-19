import { forwardRef } from 'react';
import { useCheckbox, UseCheckboxProps } from '../../headless/Checkbox';
import { checkboxVariants, CheckboxVariantProps } from './Checkbox.styles';
import { cn } from '../../utils/cn';

export interface CheckboxProps extends UseCheckboxProps, CheckboxVariantProps {
    className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ size = 'md', className, ...props }, ref) => {
        const { inputProps, state } = useCheckbox(props);

        return (
            <input
                ref={ref}
                {...inputProps}
                className={cn(
                    checkboxVariants({
                        size,
                        state: state.isInvalid ? 'invalid' : 'default',
                    }),
                    className
                )}
            />
        );
    }
);

Checkbox.displayName = 'Checkbox';
