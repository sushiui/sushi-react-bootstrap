import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SsFixedNav from "./SsFixedNav";
import { SsFixedNavProps } from "./SsFixedNav.types";
import SsIcon from "../SsIcon";

export default {
    title: 'Sushi Design/SsFixedNav',
    component: SsFixedNav,
    tags: ['autodocs', 'nav', 'header'],
    argTypes: {
        children: {
            control: "text",
        },
    },
} as Meta<SsFixedNavProps>;

const Template: StoryFn<SsFixedNavProps> = (args) => <SsFixedNav {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Default Navigation Content",
};
export const NavBrand = Template.bind({});
NavBrand.args = {
    children: <div style={{position: 'relative'}}>
        <SsIcon name={'Github'} className={'text-primary'} />
    </div>
};


export const CustomContent = Template.bind({});
CustomContent.args = {
    children: (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    ),
};
