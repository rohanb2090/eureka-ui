import { useState, useCallback, useEffect, useRef, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { UseCheckboxProps, UseCheckboxReturn } from './Checkbox.types';

/**
 * Headless checkbox hook
 * 
 * Responsibilities:
 * - Checked state management (controlled/uncontrolled)
 * - Indeterminate state handling
 * - Keyboard accessibility (Space to toggle)
 * - ARIA attributes for screen readers
 * 
 * Does NOT handle:
 * - Visual styling
 * - Checkmark icon rendering
 * - Layout or positioning
 */
export function useCheckbox(props: UseCheckboxProps = {}): UseCheckboxReturn {
    const {
        isChecked: controlledChecked,
        defaultChecked = false,
        isIndeterminate = false,
        isDisabled = false,
        isReadOnly = false,
        isRequired = false,
        isInvalid = false,
        onChange,
        onFocus: onFocusProp,
        onBlur: onBlurProp,
        value,
        name,
        id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
    } = props;

    // Uncontrolled checked state
    const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);

    // Use controlled if provided, otherwise uncontrolled
    const isChecked = controlledChecked !== undefined ? controlledChecked : uncontrolledChecked;

    // Track focus state
    const [isFocused, setIsFocused] = useState(false);

    // Ref to set indeterminate property (not controllable via HTML attribute)
    const inputRef = useRef<HTMLInputElement>(null);

    // Set indeterminate property on the DOM element
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = isIndeterminate;
        }
    }, [isIndeterminate]);

    /**
     * Change handler
     */
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (isDisabled || isReadOnly) {
            e.preventDefault();
            return;
        }

        const newChecked = e.target.checked;

        // Update uncontrolled state if not controlled
        if (controlledChecked === undefined) {
            setUncontrolledChecked(newChecked);
        }

        onChange?.(newChecked, e);
    }, [isDisabled, isReadOnly, controlledChecked, onChange]);

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
     * Space key toggles checkbox (native behavior, but we track it)
     */
    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (isDisabled || isReadOnly) {
            e.preventDefault();
            return;
        }

        // Space is handled natively by checkbox, but we can intercept if needed
    }, [isDisabled, isReadOnly]);

    return {
        inputProps: {
            type: 'checkbox',
            // Controlled checked if provided
            ...(controlledChecked !== undefined && { checked: controlledChecked }),
            // Uncontrolled default if not controlled
            ...(controlledChecked === undefined && { defaultChecked }),
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired,
            value,
            name,
            id,

            // ARIA attributes
            ...(ariaLabel && { 'aria-label': ariaLabel }),
            ...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby }),
            ...(ariaDescribedby && { 'aria-describedby': ariaDescribedby }),
            ...(isInvalid && { 'aria-invalid': true }),
            ...(isRequired && { 'aria-required': true }),
            // Indeterminate state for screen readers
            ...(isIndeterminate && { 'aria-checked': 'mixed' as const }),

            // Event handlers
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
        },

        state: {
            isChecked,
            isIndeterminate,
            isFocused,
            isDisabled,
            isReadOnly,
            isInvalid,
        },
    };
}
