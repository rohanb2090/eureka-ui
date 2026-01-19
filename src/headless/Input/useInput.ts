import { useState, useCallback, ChangeEvent, FocusEvent } from 'react';
import { UseInputProps, UseInputReturn } from './Input.types';

/**
 * Headless input hook
 * 
 * Responsibilities:
 * - Input value management (controlled/uncontrolled)
 * - Validation state handling
 * - Focus management
 * - Accessibility attributes (ARIA)
 * 
 * Does NOT handle:
 * - Visual styling
 * - Layout or spacing
 * - Error message display
 */
export function useInput(props: UseInputProps = {}): UseInputReturn {
    const {
        value: controlledValue,
        defaultValue,
        isDisabled = false,
        isReadOnly = false,
        isInvalid = false,
        isRequired = false,
        onChange,
        onFocus: onFocusProp,
        onBlur: onBlurProp,
        onKeyDown,
        type = 'text',
        placeholder,
        autoFocus,
        autoComplete,
        maxLength,
        name,
        id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
        'aria-errormessage': ariaErrorMessage,
    } = props;

    // Track focus state
    const [isFocused, setIsFocused] = useState(false);

    /**
     * Change handler
     * Calls onChange with value and event
     */
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (isDisabled || isReadOnly) {
            return;
        }

        onChange?.(e.target.value, e);
    }, [isDisabled, isReadOnly, onChange]);

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

    return {
        inputProps: {
            type,
            // Controlled value if provided
            ...(controlledValue !== undefined && { value: controlledValue }),
            // Uncontrolled default value
            ...(controlledValue === undefined && defaultValue !== undefined && { defaultValue }),
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired,
            placeholder,
            autoFocus,
            autoComplete,
            maxLength,
            name,
            id,

            // ARIA attributes
            ...(ariaLabel && { 'aria-label': ariaLabel }),
            ...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby }),
            ...(ariaDescribedby && { 'aria-describedby': ariaDescribedby }),
            ...(ariaErrorMessage && { 'aria-errormessage': ariaErrorMessage }),
            ...(isInvalid && { 'aria-invalid': true }),
            ...(isRequired && { 'aria-required': true }),

            // Event handlers
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...(onKeyDown && { onKeyDown }),
        },

        state: {
            isFocused,
            isDisabled,
            isReadOnly,
            isInvalid,
        },
    };
}
