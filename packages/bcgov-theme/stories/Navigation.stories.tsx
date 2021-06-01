import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Navigation from '../src/Navigation';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    header: {
      control: {
        type: 'select',
        options: ['main', 'sub'],
      },
    },
  },
  parameters: {
    details: {
      title: 'Navigation',
      description:
        'The navigation is similar to the header component, with an additional collapsable navigation menu. Pass an unordered list of anchors for your menu links.',
      allEnabledDescription: `For fully enhanced environments, the navigation can be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. The navigation will menu will still work as expected.`,
      htmlOnlyDescription: `Without css, the default browser styling is used. The mobile and main menu will both render to ensure no content is hidden.`,
      usageCode: `
        import Navigation from "@button-inc/bcgov-theme/Navigation";

        export default function Component() {
          return (
            <Navigation
              title="Hello British Columbia"
              mobileBreakPoint={600}
            >
              <ul>
                <li>
                  <a href="/Home">Home</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Careers">Careers</a>
                </li>
              </ul>
            </Navigation>
          );
        }
        `,
      props: [
        {
          name: 'mobileMenu',
          type: 'JSX component',
          description: `Pass a jsx component to this prop to render a different menu on mobile devices than full-screen.`,
        },
        {
          name: 'mobileBreakPoint',
          type: 'number',
          description: `The number of pixels at which to break into a mobile hamburger menu.`,
        },
        {
          name: 'title',
          type: 'string',
          description: `The title of the header.`,
        },
        {
          name: 'onBannerClick',
          type: 'function',
          description: 'Callback function to fire when the logo is clicked.',
        },
        {
          name: 'header',
          type: 'string',
          description: `The type of header to use. Types "main", and "sub" are supported. Toggle in controls to see the design.`,
        },
      ],
    },
  },
} as Meta;

const Menu = () => (
  <ul>
    <li>
      <a href=".">Link 1</a>
    </li>
    <li>
      <a href=".">Link 2</a>
    </li>
    <li>
      <a href=".">Link 3</a>
    </li>
    <li>
      <a href=".">Link 4</a>
    </li>
    <li>
      <a href=".">Link 5</a>
    </li>
    <li>
      <a href=".">Link 6</a>
    </li>
  </ul>
);

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Navigation {...args}>
      <Menu />
    </Navigation>
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Hello British Columbia',
  mobileBreakPoint: 500,
  header: 'main',
};
