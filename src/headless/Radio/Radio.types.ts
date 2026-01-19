import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

/**
 * Behavioral props for radio component
 */
export interface UseRadioProps {
    // State
    /** Radio value */
    value: string;

    /** Whether this radio is checked */
    isChecked?: boolean;

    /** Whether radio is disabled */
    isDisabled?: boolean;

    /** Whether radio is read-only */
    isReadOnly?: boolean;

    /** Whether radio is required (typically set on group level) */
    isRequired?: boolean;

    /** Whether radio is invalid */
    isInvalid?: boolean;

    // Events
    /** Called when radio is selected */
    onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;

    /** Focus handler */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;

    /** Blur handler */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;

    // Accessibility
    /** Accessible label */
    'aria-label'?: string;

    /** ID of element labeling the radio */
    'aria-labelledby'?: string;

    /** ID of element describing the radio */
    'aria-describedby'?: string;

    // Behavior
    /** Radio name attribute (required for grouping) */
    name?: string;

    /** Radio ID */
    id?: string;
}

/**
 * Return value from useRadio hook
 */
export interface UseRadioReturn {
    /** Props to spread onto the input element */
    inputProps: {
        type: 'radio';
        value: string;
        checked?: boolean;
        disabled: boolean;
        readOnly: boolean;
        required: boolean;
        name: string;
        id?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-describedby'?: string;
        'aria-invalid'?: boolean;
        'aria-required'?: boolean;
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
        onFocus: (e: FocusEvent<HTMLInputElement>) => void;
        onBlur: (e: FocusEvent<HTMLInputElement>) => void;
        onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    };

    /** Current state */
    state: {
        isChecked: boolean;
        isFocused: boolean;
        isDisabled: boolean;
        isReadOnly: boolean;
        isInvalid: boolean;
    };
}

/**
 * Props for radio group container
 */
export interface UseRadioGroupProps {
    /** Current selected value (controlled) */
    value?: string;

    /** Default value (uncontrolled) */
    defaultValue?: string;

    /** Group name (required) */
    name: string;

    /** Called when selection changes */
    onChange?: (value: string) => void;

    /** Whether entire group is disabled */
    isDisabled?: boolean;

    /** Whether entire group is required */
    isRequired?: boolean;

    // Accessibility
    /** Group label */
    'aria-label'?: string;

    /** ID of element labeling the group */
    'aria-labelledby'?: string;
}

/**
 * Return value from useRadioGroup hook
 */
export interface UseRadioGroupReturn {
    /** Props to spread onto the group container */
    groupProps: {
        role: 'radiogroup';
        'aria-label'?: string;
        'aria-labelledby'?: string;
    };

    /** Function to get props for individual radio in the group */
    getRadioProps: (radioProps: Omit<UseRadioProps, 'name' | 'isChecked' | 'onChange'>) => UseRadioProps;
}
