import React from 'react';
import {Meta, StoryFn, StoryObj} from '@storybook/react';
import SsButton from './SsButton';
import {SsIcon} from "../index";

const meta: Meta<typeof SsButton> = {
    title: 'Sushi Design/SsButton',
    component: SsButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'md'},
            },
        },
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'primary'},
            },
        },
        bgGradient: {
            control: 'boolean',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'true'},
            },
        },
    },
} satisfies Meta<typeof SsButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof SsButton> = (args) => <SsButton {...args}>{args.children}</SsButton>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};


export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Success Button',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'Info Button',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Warning Button',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Danger Button',
    },
};

// You can also export stories with different sizes
export const LargePrimary: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Large Primary Button',
    },
};
export const MediumWithIcon: Story = {
    args: {
        variant: 'info',
        children: <><SsIcon size={18} name={'Document-1' }/> Info With Icon</>,
    },
};

export const SmallSecondary: Story = {
    args: {
        variant: 'secondary',
        size: 'sm',
        children: 'Small  Secondary Button',
    },
};

export const MediumLink: Story = {
    args: {
        variant: 'link',
        children: 'Link to some page',
    },
}
