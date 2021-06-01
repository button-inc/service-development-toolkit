import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card from '../src/Card';
import Link from '../src/Link';
import Button from '../src/Button';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    details: {
      title: 'Card',
      description:
        'Cards can be used to highlight content within a styled box. Any children passed to the card will be rendered into the main body.',
      allEnabledDescription: `For fully enhanced environments, cards an be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Cards will render with the same style.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the card.`,
      usageCode: `
        import Card from '@button-inc/bcgov-theme/Card';
        import Link from '@button-inc/bcgov-theme/Link';
        import Button from '@button-inc/bcgov-theme/Button';

        export default function Component() {
          return (
            <Card title="Online Registration">
              If you'd like to register online please ensure that you have the{' '}
              <Link href="#link1" content="supporting documents" /> available
              <br /> <br />
              <Button>Click here to register</Button>
              <br /> <br />
              <Link href="#link1">
                Already registered? Click here to <strong>login</strong>
              </Link>
            </Card>
          );
        }
        `,
      props: [
        {
          name: 'title',
          type: 'string',
          description: `The title of the card to display in its header.`,
        },
      ],
    },
  },
} as Meta;

const Example = ({ args }) => {
  return (
    <>
      <Card {...args}>
        If you'd like to register online please ensure that you have the{' '}
        <Link href="#link1" content="supporting documents" /> available
        <br /> <br />
        <Button>Click here to register</Button>
        <br /> <br />
        <Link href="#link1">
          Already registered? Click here to <strong>login</strong>
        </Link>
      </Card>
    </>
  );
};

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Example args={args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Online Registration',
};
