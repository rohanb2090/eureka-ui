import { useState, useCallback, useMemo, ChangeEvent, FocusEvent } from 'react';
import { UseSelectProps, UseSelectReturn } from './Select.types';

/**
 * Headless select hook
 * 
 * Responsibilities:
 * - Selection state management (controlled/uncontrolled)
 * - Option management
 * - Keyboard navigation (native select behavior)
 * - ARIA attributes
 * 
 * Does NOT handle:
 * - Visual styling
 * - Custom dropdown rendering
 * - Multi-select (use separate component)
 */
export function useSelect(props: UseSelectProps): UseSelectReturn {
    const {
        options,
        value: controlledValue,
        defaultValue,
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

    // Uncontrolled value state
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

    // Use controlled if provided, otherwise uncontrolled
    const currentValue = controlledValue !== undefined ? controlledValue : uncontrolledValue;

    // Track focus state
    const [isFocused, setIsFocused] = useState(false);

    /**
     * Find currently selected option
     */
    const selectedOption = useMemo(() => {
        return options.find(opt => opt.value === currentValue) || null;
    }, [options, currentValue]);

    /**
     * Change handler
     */
    const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        if (isDisabled || isReadOnly) {
            e.preventDefault();
            return;
        }

        const newValue = e.target.value;
        const option = options.find(opt => opt.value === newValue);

        if (!option) return;

        // Update uncontrolled state if not controlled
        if (controlledValue === undefined) {
            setUncontrolledValue(newValue);
        }

        onChange?.(newValue, option);
    }, [isDisabled, isReadOnly, options, controlledValue, onChange]);

    /**
     * Focus handler
     */
    const handleFocus = useCallback((e: FocusEvent<HTMLSelectElement>) => {
        setIsFocused(true);
        onFocusProp?.(e);
    }, [onFocusProp]);

    /**
     * Blur handler
     */
    const handleBlur = useCallback((e: FocusEvent<HTMLSelectElement>) => {
        setIsFocused(false);
        onBlurProp?.(e);
    }, [onBlurProp]);

    return {
        selectProps: {
            // Controlled value if provided
            ...(controlledValue !== undefined && { value: controlledValue }),
            // Uncontrolled default value
            ...(controlledValue === undefined && defaultValue !== undefined && { defaultValue }),
            disabled: isDisabled,
            required: isRequired,
            name,
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
        },

        state: {
            selectedOption,
            isFocused,
            isDisabled,
            isReadOnly,
            isInvalid,
        },

        options,
    };
}
