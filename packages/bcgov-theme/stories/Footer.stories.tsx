import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Footer from '../src/Footer';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    details: {
      title: 'Footer',
      description:
        'A styled footer to easliy display links. The footer will render children passed to it, and to include link formatting pass in a list of links. See Usage for examples.',
      allEnabledDescription: `For fully enhanced environments, the footer can be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Styles and links will work the same as with javascript.`,
      htmlOnlyDescription: `Without css, the default browser styling for a list of links will be used.`,
      usageCode: `
        import Footer from "@button-inc/bcgov-theme/Footer";

        export default function Component() {
          return (
            <div>
              <Footer>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </Footer>
            </div>
          );
        }
        `,
      props: [],
    },
  },
} as Meta;

const Menu = () => (
  <ul>
    <li>
      <a href=".">About</a>
    </li>
    <li>
      <a href=".">Careers</a>
    </li>
    <li>
      <a href=".">Privacy Policy</a>
    </li>
  </ul>
);

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Footer {...args}>
      <Menu />
    </Footer>
  </>
);

export const Default = Template.bind({});
