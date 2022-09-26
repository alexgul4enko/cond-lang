import { Story, Meta } from '@storybook/react';
import { SomePage } from './some-page';

export default {
    title: 'Example/SomePage',
    component: SomePage
} as Meta;

export const Default: Story = () => <SomePage />;
