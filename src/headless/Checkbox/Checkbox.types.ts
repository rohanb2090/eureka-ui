import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

/**
 * Behavioral props for checkbox component
 */
export interface UseCheckboxProps {
    // State
    /** Whether checkbox is checked (controlled) */
    isChecked?: boolean;

    /** Default checked state (uncontrolled) */
    defaultChecked?: boolean;

    /** Whether checkbox is indeterminate (mixed state) */
    isIndeterminate?: boolean;

    /** Whether checkbox is disabled */
    isDisabled?: boolean;

    /** Whether checkbox is read-only */
    isReadOnly?: boolean;

    /** Whether checkbox is required */
    isRequired?: boolean;

    /** Whether checkbox is invalid */
    isInvalid?: boolean;

    // Events
    /** Called when checked state changes */
    onChange?: (checked: boolean, e: ChangeEvent<HTMLInputElement>) => void;

    /** Focus handler */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;

    /** Blur handler */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;

    // Accessibility
    /** Accessible label */
    'aria-label'?: string;

    /** ID of element labeling the checkbox */
    'aria-labelledby'?: string;

    /** ID of element describing the checkbox */
    'aria-describedby'?: string;

    // Behavior
    /** Checkbox value attribute */
    value?: string;

    /** Checkbox name attribute */
    name?: string;

    /** Checkbox ID */
    id?: string;
}

/**
 * Return value from useCheckbox hook
 */
export interface UseCheckboxReturn {
    /** Props to spread onto the input element */
    inputProps: {
        type: 'checkbox';
        checked?: boolean;
        defaultChecked?: boolean;
        disabled: boolean;
        readOnly: boolean;
        required: boolean;
        value?: string;
        name?: string;
        id?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-describedby'?: string;
        'aria-invalid'?: boolean;
        'aria-required'?: boolean;
        'aria-checked'?: boolean | 'mixed';
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
        onFocus: (e: FocusEvent<HTMLInputElement>) => void;
        onBlur: (e: FocusEvent<HTMLInputElement>) => void;
        onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    };

    /** Current state */
    state: {
        isChecked: boolean;
        isIndeterminate: boolean;
        isFocused: boolean;
        isDisabled: boolean;
        isReadOnly: boolean;
        isInvalid: boolean;
    };
}
