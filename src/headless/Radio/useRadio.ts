import { useState, useCallback, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { UseRadioProps, UseRadioReturn, UseRadioGroupProps, UseRadioGroupReturn } from './Radio.types';

/**
 * Headless radio hook
 * 
 * Responsibilities:
 * - Selection state management
 * - Keyboard accessibility
 * - ARIA attributes
 * 
 * Does NOT handle:
 * - Visual styling
 * - Radio dot rendering
 * - Group layout
 * 
 * Note: Typically used via useRadioGroup for proper group behavior
 */
export function useRadio(props: UseRadioProps): UseRadioReturn {
    const {
        value,
        isChecked = false,
        isDisabled = false,
        isReadOnly = false,
        isRequired = false,
        isInvalid = false,
        onChange,
        onFocus: onFocusProp,
        onBlur: onBlurProp,
        name,
        id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
    } = props;

    // Track focus state
    const [isFocused, setIsFocused] = useState(false);

    /**
     * Change handler
     */
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (isDisabled || isReadOnly) {
            e.preventDefault();
            return;
        }

        onChange?.(value, e);
    }, [isDisabled, isReadOnly, value, onChange]);

    /**
     * Focus handler
     */
    const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocusProp?.(e);
    }, [onFocusProp]);

    /**
     * Blur handler
     */
    const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlurProp?.(e);
    }, [onBlurProp]);

    /**
     * KeyDown handler
     * Arrow keys navigate radio group (handled by browser natively)
     */
    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (isDisabled || isReadOnly) {
            e.preventDefault();
        }
    }, [isDisabled, isReadOnly]);

    return {
        inputProps: {
            type: 'radio',
            value,
            checked: isChecked,
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired,
            name: name || '',
            id,

            // ARIA attributes
            ...(ariaLabel && { 'aria-label': ariaLabel }),
            ...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby }),
            ...(ariaDescribedby && { 'aria-describedby': ariaDescribedby }),
            ...(isInvalid && { 'aria-invalid': true }),
            ...(isRequired && { 'aria-required': true }),

            // Event handlers
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
        },

        state: {
            isChecked,
            isFocused,
            isDisabled,
            isReadOnly,
            isInvalid,
        },
    };
}

/**
 * Headless radio group hook
 * 
 * Responsibilities:
 * - Group value management (controlled/uncontrolled)
 * - Coordinating individual radio states
 * - Group-level ARIA attributes
 * 
 * Usage:
 * const { groupProps, getRadioProps } = useRadioGroup({ name: 'choice' });
 * 
 * <div {...groupProps}>
 *   <Radio {...getRadioProps({ value: 'a' })} />
 *   <Radio {...getRadioProps({ value: 'b' })} />
 * </div>
 */
export function useRadioGroup(props: UseRadioGroupProps): UseRadioGroupReturn {
    const {
        value: controlledValue,
        defaultValue,
        name,
        onChange,
        isDisabled = false,
        isRequired = false,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
    } = props;

    // Uncontrolled value state
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

    // Use controlled if provided, otherwise uncontrolled
    const currentValue = controlledValue !== undefined ? controlledValue : uncontrolledValue;

    /**
     * Get props for individual radio in the group
     */
    const getRadioProps = useCallback((radioProps: Omit<UseRadioProps, 'name' | 'isChecked' | 'onChange'>): UseRadioProps => {
        return {
            ...radioProps,
            name,
            isChecked: currentValue === radioProps.value,
            isDisabled: isDisabled || radioProps.isDisabled,
            isRequired,
            onChange: (value: string, _e: ChangeEvent<HTMLInputElement>) => {
                // Update uncontrolled state if not controlled
                if (controlledValue === undefined) {
                    setUncontrolledValue(value);
                }

                onChange?.(value);
            },
        };
    }, [name, currentValue, isDisabled, isRequired, controlledValue, onChange]);

    return {
        groupProps: {
            role: 'radiogroup',
            ...(ariaLabel && { 'aria-label': ariaLabel }),
            ...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby }),
        },
        getRadioProps,
    };
}
