import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SsBody from './SsBody';
import { SsBodyProps } from './SsBody.types';

export default {
    title: 'Components/SsBody',
    component: SsBody,
    argTypes: {
        className: { control: 'text' },
        children: { control: 'text' }
    },
} as Meta;

const Template: StoryFn<SsBodyProps> = (args) => <SsBody {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: 'bg-primary',
    children: 'This is the body content.',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
    className: 'bg-primary',
    children: 'This body uses a custom class.',
};

export const NoClass = Template.bind({});
NoClass.args = {
    children: 'This body has no class applied.',
};
