import { useEffect, useState } from 'react';

/**
 * Resolved theme colors for charts.
 * Figma doesn't support CSS variables in pasted SVGs, so we must resolve them to Hex.
 */
export interface ChartTheme {
    textPrimary: string;
    textSecondary: string;
    borderDefault: string;
    borderSubtle: string;
    actionPrimary: string;
    bgSurface: string;
    statusSuccess: string;
    statusWarning: string;
    statusError: string;
    statusInfo: string;
}

const DEFAULT_THEME: ChartTheme = {
    textPrimary: '#000000',
    textSecondary: '#666666',
    borderDefault: '#E0E0E0',
    borderSubtle: '#F0F0F0',
    actionPrimary: '#6666FF',
    bgSurface: '#FFFFFF',
    statusSuccess: '#16a34a',
    statusWarning: '#f59e0b',
    statusError: '#dc2626',
    statusInfo: '#6666ff',
};

export function useChartTheme(): ChartTheme {
    const [theme, setTheme] = useState<ChartTheme>(DEFAULT_THEME);

    useEffect(() => {
        const updateTheme = () => {
            const styles = getComputedStyle(document.documentElement);

            // Helper to resolve specific variable
            const getVar = (name: string) => {
                const value = styles.getPropertyValue(name).trim();
                return value || '';
            };

            setTheme({
                textPrimary: getVar('--text-primary') || getVar('--gray-950') || DEFAULT_THEME.textPrimary,
                textSecondary: getVar('--text-secondary') || getVar('--gray-500') || DEFAULT_THEME.textSecondary,
                borderDefault: getVar('--border-default') || getVar('--gray-200') || DEFAULT_THEME.borderDefault,
                borderSubtle: getVar('--border-subtle') || getVar('--gray-100') || DEFAULT_THEME.borderSubtle,
                actionPrimary: getVar('--action-primary') || getVar('--color-medium-slate-blue') || DEFAULT_THEME.actionPrimary,
                bgSurface: getVar('--bg-surface') || '#FFFFFF',
                statusSuccess: getVar('--status-success') || DEFAULT_THEME.statusSuccess,
                statusWarning: getVar('--status-warning') || DEFAULT_THEME.statusWarning,
                statusError: getVar('--status-error') || DEFAULT_THEME.statusError,
                statusInfo: getVar('--status-info') || DEFAULT_THEME.statusInfo,
            });
        };

        // Initial resolution
        updateTheme();

        // Optional: Listen for theme changes if you have a theme switcher that toggles classes/attributes
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });

        return () => observer.disconnect();
    }, []);

    return theme;
}
