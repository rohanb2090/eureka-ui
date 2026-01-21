import { forwardRef, ReactNode, createContext, useContext } from 'react';
import { useRadio, useRadioGroup, UseRadioProps, UseRadioGroupProps } from '../../headless/Radio';
import { radioVariants, RadioVariantProps } from './Radio.styles';
import { cn } from '../../utils/cn';

// Context for RadioGroup
interface RadioGroupContextValue {
    value?: string;
    onChange: (value: string) => void;
    name?: string;
    isDisabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

export interface RadioProps extends UseRadioProps, RadioVariantProps {
    className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ size = 'md', className, ...props }, ref) => {
        const groupContext = useContext(RadioGroupContext);

        // Merge props with context if available
        let finalProps = { ...props };

        if (groupContext) {
            // Group overrides properties
            if (groupContext.name && !finalProps.name) {
                finalProps.name = groupContext.name;
            }

            if (groupContext.isDisabled) {
                finalProps.isDisabled = true;
            }

            // Determine checked state based on group value
            if (finalProps.value !== undefined) {
                finalProps.isChecked = groupContext.value === finalProps.value;
            }

            // Wrap onChange to notify group
            const originalOnChange = finalProps.onChange;
            finalProps.onChange = (value, e) => {
                originalOnChange?.(value, e);
                groupContext.onChange(value);
            };
        }

        const { inputProps, state } = useRadio(finalProps);

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
    const { groupProps, value, onChange } = useRadioGroup(props);

    return (
        <RadioGroupContext.Provider value={{ value, onChange, name: props.name, isDisabled: props.isDisabled }}>
            <div {...groupProps} className={cn('space-y-2', className)}>
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
}
