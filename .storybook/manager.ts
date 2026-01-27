import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
    base: 'light',
    brandTitle: 'Eureka UI Design System',
    brandUrl: 'https://github.com/rohanb2090/eureka-ui',
    brandTarget: '_self',
});

addons.setConfig({
    theme,
});
