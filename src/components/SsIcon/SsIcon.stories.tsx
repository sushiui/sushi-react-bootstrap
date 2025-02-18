import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import SsIcon from './SsIcon'; // Your icon component

// Meta configuration for the SsIcon component
const meta: Meta<typeof SsIcon> = {
    title: 'Sushi Design/SsIcon',
    component: SsIcon,
    parameters: {
        layout: 'centered', // Story layout setting
    },
    tags: ['autodocs'], // Storybook documentation tag
    argTypes: {
        name: {
            control: 'select', // Dropdown for selecting an icon name
            options: [
                'Access-alarm', 'Account-circle', 'Add', 'Alert', 'Approve', 'Approves-filled',
                'Approves', 'Assign', 'Attach-Money', 'Attachment', 'Auditor', 'Back-Android',
                'Back-iOS', 'Back', 'Bookmark', 'Bookmarks-filled', 'Business', 'Calendar',
                'Callcenter', 'cancel-filled', 'Category', 'Check-list', 'Checkbox-selected',
                'Checkbox', 'Checked', 'Circle-filled', 'Classroom', 'Close-or-Reject', 'Company',
                'Content-copy', 'Dash', 'Date', 'Decrease', 'Delete', 'DOC', 'Document-1',
                'Document', 'Documents', 'Down', 'Download', 'Edit-filled', 'Edit', 'Email',
                'ESG', 'Euro', 'Exit', 'External-link', 'Eye-close', 'Eye', 'Fax', 'File-upload',
                'Fill-color', 'Filter', 'Fire', 'Folder-open', 'Github', 'Help', 'Home-filled',
                'Home', 'Increase', 'Information', 'Language', 'Link', 'Location', 'Lock',
                'Logout', 'Main-Component-filled', 'Market', 'Maximize-arrow', 'Maximize-filled',
                'Minimize-arrow', 'Minimize-filled', 'Mobile-phone', 'More-Android', 'More-iOS',
                'More-Hamburger', 'Mouse-cursor-filled', 'Move', 'News-filled', 'News', 'Next-big',
                'Next', 'Notification-filled', 'Notification', 'One-Report', 'Page-filled', 'PDF',
                'Phone-call-filled', 'Phone', 'Picture', 'Printer', 'Profile-filled', 'Profile',
                'Push-pin', 'Radio-button-selected', 'Radio-button', 'Reader', 'Refresh', 'Search',
                'Set-link', 'Set', 'Setting', 'Settings-suggest', 'Sorting', 'Star-Filled', 'Star',
                'Status-circle', 'Suitcase', 'Supervisor', 'Sushi', 'Speak', 'Table-view', 'Table',
                'Terrain', 'Thumb-up-filled', 'Thumbnail', 'Time', 'TXT', 'Unchange', 'Underline',
                'Up', 'Video', 'Vpn-key', 'Waiting', 'Warning', 'Web', 'XML', 'Zoom-in', 'Zoom-out'
            ],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Access-alarm' },
            },
        },
        className: {
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        size: {
            control: 'number',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '24' },
            },
        }

    },
} satisfies Meta<typeof SsIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof SsIcon> = (args) => <SsIcon {...args} />;

// Default story (Access-alarm icon)
export const Default: Story = {
    args: {
        name: 'Access-alarm',
        className: '',
        size: 24,
    },
};

// Story for Account-circle icon
export const AccountCircle: Story = {
    args: {
        name: 'Account-circle',
        className: '',
    },
};

export const AddIcon: Story = {
    args: {
        name: 'Add',
        className: '',
    },
};

export const AlertIcon: Story = {
    args: {
        name: 'Alert',
        className: 'text-danger text-2xl',
    },
};

export const ApproveIcon: Story = {
    args: {
        name: 'Approve',
        className: '',
    },
};

