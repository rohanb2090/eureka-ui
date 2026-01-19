import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/index.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            disable: true, // Disable Storybook's default background switcher
        },
        a11y: {
            config: {
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: true,
                    },
                ],
            },
        },
    },
    globalTypes: {
        theme: {
            description: 'Theme',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    { value: 'light', title: 'Light', icon: 'sun' },
                    { value: 'dark', title: 'Dark', icon: 'moon' },
                ],
                dynamicTitle: true,
            },
        },
        density: {
            description: 'Density',
            defaultValue: 'default',
            toolbar: {
                title: 'Density',
                icon: 'grow',
                items: [
                    { value: 'compact', title: 'Compact' },
                    { value: 'default', title: 'Default' },
                    { value: 'comfortable', title: 'Comfortable' },
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || 'light';
            const density = context.globals.density || 'default';

            // Set theme on documentElement for proper CSS cascade
            React.useEffect(() => {
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.setAttribute('data-density', density);
            }, [theme, density]);

            return React.createElement(
                'div',
                {
                    'data-theme': theme,
                    'data-density': density,
                    style: {
                        backgroundColor: 'var(--bg-page)',
                        color: 'var(--text-primary)',
                        padding: '2rem',
                        transition: 'background-color 200ms, color 200ms',
                    },
                },
                React.createElement(Story)
            );
        },
    ],
};

export default preview;
