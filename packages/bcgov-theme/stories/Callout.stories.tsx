import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Callout from '../src/Callout';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/Callout',
  component: Callout,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary'],
      },
    },
  },
  parameters: {
    details: {
      title: 'Callout',
      description: `Callouts are an excerpt of text that has been pulled out and used as a visual clue to draw the eye to the text. They are used to help direct a user's attention to important pieces of information.
      The callout component can either be passed content through the "content" prop, or passed children to render.`,
      allEnabledDescription: `For fully enhanced environments, callouts an be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Callouts will display normally.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the callout.`,
      usageCode: `
        import Callout from "@button-inc/bcgov-theme/Callout";

        export default function Component() {
          return (
            <>
              <Callout>
                By March 1, 2018, eligible residents of B.C. are expected to renew enrolment in the Medical Services Plan (MSP) and get a BC Services Card.
              </Callout>
            </>
          );
        }
        `,
      props: [
        {
          name: 'variant',
          type: 'string',
          description: `The style variant to use. Currently only a "primary" variant is supported which is applied by default.`,
        },
        {
          name: 'size',
          type: 'string',
          description: `The size to use. Use one of ['small', 'medium', 'large'].`,
        },
        {
          name: 'content',
          type: 'string',
          description: `The content to display in the callout.`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Callout {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  content:
    'By March 1, 2018, eligible residents of B.C. are expected to renew enrolment in the Medical Services Plan (MSP) and get a BC Services Card.',
};
