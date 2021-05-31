import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Link from '../src/Link';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  parameters: {
    details: {
      title: 'Link',
      description:
        'Links lead people to a different page. The link component acceps string content through the "content" prop, or can be passed children.',
      allEnabledDescription: `For fully enhanced environments, links an be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Links will still be able to redirect users.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the link.`,
      usageCode: `
        import Link from "@button-inc/bcgov-theme/Link";

        export default function Component() {
          return (
            <Link content="External Source" size="large" href="#" external/>
          );
        }
        `,
      props: [
        {
          name: 'size',
          type: 'string',
          description: `The size to use. Use one of ['small', 'medium', 'large'].`,
        },
        {
          name: 'content',
          type: 'string',
          description: `The text for the link to contain.`,
        },
        {
          name: 'href',
          type: 'string',
          description: `The URL to link to.`,
        },
        {
          name: 'external',
          type: 'boolean',
          description: `Whether or not the link is external. If set true, an indicating icon will be rendered and the target will be set to blank.`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Link {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  href: '#',
  size: 'medium',
  content: 'Access your application',
  external: true,
};
