import { MouseEvent, KeyboardEvent, FocusEvent } from 'react';

/**
 * Behavioral props for button component
 * Handles logic, state, and accessibility (no visual props)
 */
export interface UseButtonProps {
    // State
    /** Whether the button is disabled and non-interactive */
    isDisabled?: boolean;

    /** Whether the button is in a loading state (blocks additional input) */
    isLoading?: boolean;

    // Events
    /** Standard click handler */
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;

    /** Unified press handler (fires on click, Enter, or Space) */
    onPress?: () => void;

    /** Called when press interaction starts */
    onPressStart?: () => void;

    /** Called when press interaction ends */
    onPressEnd?: () => void;

    /** Focus event handler */
    onFocus?: (e: FocusEvent<HTMLButtonElement>) => void;

    /** Blur event handler */
    onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;

    // Accessibility
    /** Accessible label (required for icon-only buttons) */
    'aria-label'?: string;

    /** ID of element describing the button */
    'aria-describedby'?: string;

    /** ID of element labeling the button */
    'aria-labelledby'?: string;

    /** For toggle buttons: pressed state */
    'aria-pressed'?: boolean | 'mixed';

    // Behavior
    /** HTML button type */
    type?: 'button' | 'submit' | 'reset';

    /** Auto-focus on mount */
    autoFocus?: boolean;

    /** Tab index override */
    tabIndex?: number;
}

/**
 * Return value from useButton hook
 * Provides all behavioral props for the button element
 */
export interface UseButtonReturn {
    /** Props to spread onto the button element */
    buttonProps: {
        type: 'button' | 'submit' | 'reset';
        disabled: boolean;
        tabIndex: number;
        role: string;
        'aria-disabled'?: boolean;
        'aria-busy'?: boolean;
        'aria-label'?: string;
        'aria-describedby'?: string;
        'aria-labelledby'?: string;
        'aria-pressed'?: boolean | 'mixed';
        onClick: (e: MouseEvent<HTMLButtonElement>) => void;
        onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
        onKeyUp: (e: KeyboardEvent<HTMLButtonElement>) => void;
        onFocus: (e: FocusEvent<HTMLButtonElement>) => void;
        onBlur: (e: FocusEvent<HTMLButtonElement>) => void;
        autoFocus?: boolean;
    };

    /** Current state (for visual layer to consume if needed) */
    state: {
        isPressed: boolean;
        isFocused: boolean;
        isDisabled: boolean;
        isLoading: boolean;
    };
}
