/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                bg: {
                    page: 'var(--bg-page)',
                    surface: 'var(--bg-surface)',
                    subtle: 'var(--bg-subtle)',
                    elevated: 'var(--bg-elevated)',
                },
                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                    tertiary: 'var(--text-tertiary)',
                    disabled: 'var(--text-disabled)',
                    inverse: 'var(--text-inverse)',
                },
                border: {
                    DEFAULT: 'var(--border-default)',
                    subtle: 'var(--border-subtle)',
                    strong: 'var(--border-strong)',
                    focus: 'var(--border-focus)',
                },
                action: {
                    primary: 'var(--action-primary)',
                    'primary-hover': 'var(--action-primary-hover)',
                    'primary-active': 'var(--action-primary-active)',
                    secondary: 'var(--action-secondary)',
                    'secondary-hover': 'var(--action-secondary-hover)',
                    destructive: 'var(--action-destructive)',
                    'destructive-hover': 'var(--action-destructive-hover)',
                    'text-on-primary': 'var(--action-text-on-primary)',
                },
                status: {
                    info: 'var(--status-info)',
                    success: 'var(--status-success)',
                    warning: 'var(--status-warning)',
                    error: 'var(--status-error)',
                },
            },
            spacing: {
                xs: 'var(--spacing-xs)',
                sm: 'var(--spacing-sm)',
                md: 'var(--spacing-md)',
                lg: 'var(--spacing-lg)',
                xl: 'var(--spacing-xl)',
                '2xl': 'var(--spacing-2xl)',
                '3xl': 'var(--spacing-3xl)',
                '4xl': 'var(--spacing-4xl)',
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                pill: 'var(--radius-pill)',
            },
            opacity: {
                disabled: 'var(--opacity-disabled)',
            },
        },
    },
    plugins: [],
};
