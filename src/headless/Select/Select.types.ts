import { ChangeEvent, FocusEvent } from 'react';

/**
 * Option in a select dropdown
 */
export interface SelectOption {
    value: string;
    label: string;
    isDisabled?: boolean;
}

/**
 * Behavioral props for select component
 */
export interface UseSelectProps {
    // Options
    /** Available options */
    options: SelectOption[];

    // State
    /** Current selected value (controlled) */
    value?: string;

    /** Default value (uncontrolled) */
    defaultValue?: string;

    /** Whether select is disabled */
    isDisabled?: boolean;

    /** Whether select is read-only */
    isReadOnly?: boolean;

    /** Whether select is required */
    isRequired?: boolean;

    /** Whether select is invalid */
    isInvalid?: boolean;

    // Events
    /** Called when selection changes */
    onChange?: (value: string, option: SelectOption) => void;

    /** Focus handler */
    onFocus?: (e: FocusEvent<HTMLSelectElement>) => void;

    /** Blur handler */
    onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;

    // Accessibility
    /** Accessible label */
    'aria-label'?: string;

    /** ID of element labeling the select */
    'aria-labelledby'?: string;

    /** ID of element describing the select */
    'aria-describedby'?: string;

    // Behavior
    /** Placeholder option text */
    placeholder?: string;

    /** Select name attribute */
    name?: string;

    /** Select ID */
    id?: string;
}

/**
 * Return value from useSelect hook
 */
export interface UseSelectReturn {
    /** Props to spread onto the select element */
    selectProps: {
        value?: string;
        defaultValue?: string;
        disabled: boolean;
        required: boolean;
        name?: string;
        id?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-describedby'?: string;
        'aria-invalid'?: boolean;
        'aria-required'?: boolean;
        onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
        onFocus: (e: FocusEvent<HTMLSelectElement>) => void;
        onBlur: (e: FocusEvent<HTMLSelectElement>) => void;
    };

    /** Current state */
    state: {
        selectedOption: SelectOption | null;
        isFocused: boolean;
        isDisabled: boolean;
        isReadOnly: boolean;
        isInvalid: boolean;
    };

    /** Options to render */
    options: SelectOption[];
}
