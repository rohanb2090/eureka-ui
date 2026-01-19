import { useState, useCallback, MouseEvent, KeyboardEvent, FocusEvent } from 'react';
import { UseButtonProps, UseButtonReturn } from './Button.types';

/**
 * Headless button hook
 * 
 * Responsibilities:
 * - Keyboard accessibility (Enter, Space activation)
 * - Mouse and touch interaction
 * - Screen reader support (ARIA attributes)
 * - Disabled and loading state management
 * - Press state tracking for visual feedback
 * 
 * Does NOT handle:
 * - Visual styling
 * - Color, spacing, or layout
 * - Variant-specific rendering
 */
export function useButton(props: UseButtonProps = {}): UseButtonReturn {
    const {
        isDisabled = false,
        isLoading = false,
        onClick,
        onPress,
        onPressStart,
        onPressEnd,
        onFocus: onFocusProp,
        onBlur: onBlurProp,
        type = 'button',
        autoFocus,
        tabIndex,
        'aria-label': ariaLabel,
        'aria-describedby': ariaDescribedby,
        'aria-labelledby': ariaLabelledby,
        'aria-pressed': ariaPressed,
    } = props;

    // Track press state for visual feedback (e.g., active state styling)
    const [isPressed, setIsPressed] = useState(false);

    // Track focus state
    const [isFocused, setIsFocused] = useState(false);

    // Combined disabled state (disabled OR loading)
    // Loading should block interaction but use different visual treatment
    const disabled = isDisabled || isLoading;

    /**
     * Unified press handler
     * Calls both onClick and onPress if provided
     */
    const handlePress = useCallback(() => {
        if (disabled) return;

        onPress?.();
    }, [disabled, onPress]);

    /**
     * Click handler
     * Handles mouse interactions
     */
    const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        // Call onClick first (standard React event)
        onClick?.(e);

        // Then call unified press handler
        handlePress();
    }, [disabled, onClick, handlePress]);

    /**
     * KeyDown handler
     * Implements keyboard activation (Enter, Space)
     * Following native button behavior
     */
    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        // Enter key: activate immediately on keydown
        if (e.key === 'Enter') {
            e.preventDefault();
            setIsPressed(true);
            onPressStart?.();
            handlePress();
        }

        // Space key: set pressed state on keydown (release on keyup)
        if (e.key === ' ') {
            e.preventDefault();
            setIsPressed(true);
            onPressStart?.();
        }
    }, [disabled, handlePress, onPressStart]);

    /**
     * KeyUp handler
     * Completes Space key activation
     */
    const handleKeyUp = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        // Space key: activate on keyup (matching native button behavior)
        if (e.key === ' ') {
            e.preventDefault();
            setIsPressed(false);
            onPressEnd?.();
            handlePress();
        }

        // Enter key: clear pressed state on keyup
        if (e.key === 'Enter') {
            setIsPressed(false);
            onPressEnd?.();
        }
    }, [disabled, handlePress, onPressEnd]);

    /**
     * Focus handler
     */
    const handleFocus = useCallback((e: FocusEvent<HTMLButtonElement>) => {
        setIsFocused(true);
        onFocusProp?.(e);
    }, [onFocusProp]);

    /**
     * Blur handler
     */
    const handleBlur = useCallback((e: FocusEvent<HTMLButtonElement>) => {
        setIsFocused(false);
        setIsPressed(false); // Clear press state if focus is lost mid-press
        onBlurProp?.(e);
    }, [onBlurProp]);

    /**
     * Determine tabIndex
     * Disabled buttons should not be focusable
     */
    const computedTabIndex = disabled ? -1 : (tabIndex ?? 0);

    return {
        buttonProps: {
            type,
            // Use disabled attribute for proper form integration
            disabled: isDisabled,
            tabIndex: computedTabIndex,
            role: 'button',

            // ARIA attributes
            // Use aria-disabled when loading (different from permanently disabled)
            ...(isLoading && { 'aria-disabled': true }),
            ...(isLoading && { 'aria-busy': true }),
            ...(ariaLabel && { 'aria-label': ariaLabel }),
            ...(ariaDescribedby && { 'aria-describedby': ariaDescribedby }),
            ...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby }),
            ...(ariaPressed !== undefined && { 'aria-pressed': ariaPressed }),

            // Event handlers
            onClick: handleClick,
            onKeyDown: handleKeyDown,
            onKeyUp: handleKeyUp,
            onFocus: handleFocus,
            onBlur: handleBlur,

            // Auto-focus if requested
            ...(autoFocus && { autoFocus }),
        },

        // Expose state for styled component (e.g., for data-attributes or conditional classes)
        state: {
            isPressed,
            isFocused,
            isDisabled,
            isLoading,
        },
    };
}
