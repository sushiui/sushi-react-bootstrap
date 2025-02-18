import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import SsMenu from "./SsMenu";
import SsIcon from "../SsIcon";
import { SsMenuProps } from "./SsMenu.types";
import MockSsPermissionsProvider from "./MockSsPermissionsProvider";


const meta: Meta<typeof SsMenu> = {
    title: "Sushi Design/SsMenu",
    component: SsMenu,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <MockSsPermissionsProvider>
                <div style={{ padding: "20px", background: "#f5f5f5" }}>
                    <Story />
                </div>
            </MockSsPermissionsProvider>
        ),
    ],
    argTypes: {
        display: {
            control: "boolean",
            description: "Toggle the display of the menu",
            defaultValue: true,
        },
        currentPath: {
            control: "text",
            description: "Current path of the application for active menu item highlighting",
        },
        menus: {
            control: "object",
            description: "List of menu items to render in the menu",
        },
    },
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

// Example menu items
const exampleMenus = [
    {
        id: "1",
        display: "Dashboard",
        link: "#",
        icon: <SsIcon className="text-primary" name="Speak" size={22} />,
        child: [
            {
                id: "1-1",
                display: "Overview",
                link: "/dashboard/overview",
            },
            {
                id: "1-2",
                display: "Stats",
                link: "/dashboard/stats",
            },
        ],
    },
    {
        id: "2",
        display: "Settings",
        link: "#",
        icon: <SsIcon className="text-primary" name="Setting" size={22} />,
        child: [
            {
                id: "2-1",
                display: "Profile",
                link: "/settings/profile",
            },
            {
                id: "2-2",
                display: "Account",
                link: "/settings/account",
            },
        ],
    },
    {
        id: "3",
        display: "Logout",
        icon: <SsIcon className="text-primary" name="Logout" size={22} />,
        link: "#",
    },
];

// Story template
const Template: StoryFn<SsMenuProps<{}>> = (args) => (
    <div className="menu-panel ss-content">
        <SsMenu {...args} />
    </div>
);

// Default menu story
export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
    menus: exampleMenus,
    currentPath: "/dashboard",
};
DefaultMenu.storyName = "Default Menu";
DefaultMenu.parameters = {
    docs: {
        description: {
            story: "A default menu showcasing all items with icons and nested children.",
        },
    },
};

// Active menu story
export const ActiveMenuItem = Template.bind({});
ActiveMenuItem.args = {
    menus: exampleMenus,
    currentPath: "/dashboard/overview",
};
ActiveMenuItem.storyName = "Active Menu Item Highlighted";
ActiveMenuItem.parameters = {
    docs: {
        description: {
            story: "Highlights the active menu item based on the `currentPath`.",
        },
    },
};

// Menu with no icons story
export const NoIconsMenu = Template.bind({});
NoIconsMenu.args = {
    menus: [
        {
            id: "1",
            display: "Home",
            link: "/home",
        },
        {
            id: "2",
            display: "Profile",
            link: "/profile",
        },
    ],
    currentPath: "/home",
};
NoIconsMenu.storyName = "Menu Without Icons";
NoIconsMenu.parameters = {
    docs: {
        description: {
            story: "A menu without icons, useful for minimalistic designs.",
        },
    },
};

// Expanded menu story
export const ExpandedMenu = Template.bind({});
ExpandedMenu.args = {
    menus: exampleMenus,
    currentPath: "/dashboard",
    defaultExpand: true,
};
ExpandedMenu.storyName = "Menu with Default Expanded State";
ExpandedMenu.parameters = {
    docs: {
        description: {
            story: "Displays the menu with all parent items expanded by default.",
        },
    },
};

// Menu with icons story
export const MenuWithIcons = Template.bind({});
MenuWithIcons.args = {
    menus: [
        {
            id: "1",
            icon: <SsIcon className="text-primary" name="Home" size={22} />,
            display: "Home",
            link: "/home",
        },
        {
            id: "2",
            icon: <SsIcon className="text-primary" name="Profile" size={22} />,
            display: "Profile",
            link: "/profile",
        },
    ],
    currentPath: "/home",
};
MenuWithIcons.storyName = "Menu with Icons Only";
MenuWithIcons.parameters = {
    docs: {
        description: {
            story: "A menu with icons for each item, useful for compact layouts.",
        },
    },
};

// Hidden menu story
export const HiddenMenu = Template.bind({});
HiddenMenu.args = {
    menus: exampleMenus,
};
HiddenMenu.storyName = "Hidden Menu";
HiddenMenu.parameters = {
    docs: {
        description: {
            story: "A menu that is hidden by setting the `display` prop to `false`.",
        },
    },
};



export const EnvironmentSpecificMenu = Template.bind({});
EnvironmentSpecificMenu.args = {
    menus: [
        {
            id: "1",
            icon: <SsIcon className="text-primary" name="Home" size={22} />,
            display: "Home",
            link: "/home",
            envs: ["dev"], // Visible only in the "dev" environment
        },
        {
            id: "2",
            icon: <SsIcon className="text-primary" name="Profile" size={22} />,
            display: "Profile",
            link: "/profile",
            envs: ["prod"], // Visible only in the "prod" environment
        },
        {
            id: "3",
            icon: <SsIcon className="text-primary" name="Settings" size={22} />,
            display: "Settings",
            link: "/settings",
            envs: ["dev", "uat"], // Visible in "dev" and "uat" environments
        },
    ],
    currentPath: "/home",
};
EnvironmentSpecificMenu.storyName = "Environment-Specific Menu";
EnvironmentSpecificMenu.parameters = {
    docs: {
        description: {
            story: "Demonstrates menu visibility based on the `envs` property. Items are filtered by the current environment.",
        },
    },
};

