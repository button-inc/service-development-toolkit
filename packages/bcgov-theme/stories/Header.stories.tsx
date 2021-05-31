import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from '../src/Header';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Header',
  component: Header,
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
      title: 'Header',
      description: `Headers help people understand what the product or service is about while providing a consistent look, feel, and functionality across government sites.
      To include site links with your header, see the Navigation component.`,
      allEnabledDescription: `For fully enhanced environments, headers can be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Functionality in the onBannerClick function will not work.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the header, which will display the svg and title as block items.`,
      usageCode: `
        import Header from "@button-inc/bcgov-theme/Header";

        export default function Component() {
          return <Header title="Hello British Columbia" header="sub"/>;
        }
        `,
      props: [
        {
          name: 'header',
          type: 'string',
          description: `The type of header to use. Types "main", and "sub" are supported. Toggle in controls to see the design.`,
        },
        {
          name: 'title',
          type: 'string',
          description: `The title to use in the header.`,
        },
        {
          name: 'onBannerClick',
          type: 'function',
          description: `Function to fire when the logo is clicked.`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Header {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Hello British Columbia',
  onBannerClick: console.log,
  header: 'main',
};
