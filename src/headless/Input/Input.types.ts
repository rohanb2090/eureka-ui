import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

/**
 * Behavioral props for input component
 */
export interface UseInputProps {
    // State
    /** Current input value (controlled) */
    value?: string;

    /** Default value (uncontrolled) */
    defaultValue?: string;

    /** Whether the input is disabled */
    isDisabled?: boolean;

    /** Whether the input is read-only */
    isReadOnly?: boolean;

    /** Whether the input has an error */
    isInvalid?: boolean;

    /** Whether the input is required */
    isRequired?: boolean;

    // Events
    /** Called when value changes */
    onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;

    /** Focus handler */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;

    /** Blur handler */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;

    /** KeyDown handler */
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;

    // Accessibility
    /** Accessible label */
    'aria-label'?: string;

    /** ID of element labeling the input */
    'aria-labelledby'?: string;

    /** ID of element describing the input */
    'aria-describedby'?: string;

    /** ID of element containing error message */
    'aria-errormessage'?: string;

    // Behavior
    /** HTML input type */
    type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';

    /** Placeholder text */
    placeholder?: string;

    /** Auto-focus on mount */
    autoFocus?: boolean;

    /** Autocomplete attribute */
    autoComplete?: string;

    /** Maximum length */
    maxLength?: number;

    /** Input name attribute */
    name?: string;

    /** Input ID */
    id?: string;
}

/**
 * Return value from useInput hook
 */
export interface UseInputReturn {
    /** Props to spread onto the input element */
    inputProps: {
        type: string;
        value?: string;
        defaultValue?: string;
        disabled: boolean;
        readOnly: boolean;
        required: boolean;
        placeholder?: string;
        autoFocus?: boolean;
        autoComplete?: string;
        maxLength?: number;
        name?: string;
        id?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-describedby'?: string;
        'aria-errormessage'?: string;
        'aria-invalid'?: boolean;
        'aria-required'?: boolean;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
        onFocus: (e: FocusEvent<HTMLInputElement>) => void;
        onBlur: (e: FocusEvent<HTMLInputElement>) => void;
        onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    };

    /** Current state */
    state: {
        isFocused: boolean;
        isDisabled: boolean;
        isReadOnly: boolean;
        isInvalid: boolean;
    };
}
