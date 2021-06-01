import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeroImage from '../src/HeroImage';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    details: {
      title: 'HeroImage',
      description:
        'A hero image can be used to overlay content on an image with a built-in background to maintain contrast. It will render any passed children on smaller background.',
      allEnabledDescription: `For fully enhanced environments, the hero image can be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers.`,
      htmlOnlyDescription: `Without css, image content will be displayed without background.`,
      usageCode: `
        import HeroImage from "@button-inc/bcgov-theme/HeroImage";

        export default function Component() {
          return (
            <HeroImage url='/sample_image_parks.jpg'>
              <h1>BC Parks.</h1>
              <p>Welcome to BC Parks!</p>
            </HeroImage>
          );
        }
        `,
      props: [
        {
          name: 'url',
          type: 'string',
          description: `The url of the image to use.`,
        },
      ],
    },
  },
} as Meta;

const Sample = ({ args }) => {
  return (
    <HeroImage {...args}>
      <h1>BC Parks.</h1>
      <p>Welcome to BC Parks!</p>
    </HeroImage>
  );
};

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Sample args={args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://bcparks.ca/_shared/images/backgrounds/Tunkwa-Iain-Robert-Reid.jpg',
};
