import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion from '../src/Accordion';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    details: {
      title: 'Accordion',
      description: `The accordion acts as a single expandable panel for content that would take up too much screen space. Multiple panels can be stacked to
      create an accordion effect. Children passed to the accordion will render as its content.`,
      allEnabledDescription: `For fully enhanced environments, accordions can be used with custom event handlers like onClick. The onToggle prop
      will also be usable.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers or the onToggle handler. The toggle functionality will still work.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the accordion. Content will be rendered open so it is still visible.`,
      usageCode: `
        import Accordion from "@button-inc/bcgov-theme/Accordion";

        export default function Component() {
          return (
            <>
              <Accordion title="Apples" defaultToggled>
                An apple is an edible fruit produced by an apple tree (Malus domestica).
                Apple trees are cultivated worldwide and are the most widely grown
                species in the genus Malus.
              </Accordion>
              <Accordion title="Oranges">
                The orange is the fruit of various citrus species in the family
                Rutaceae; it primarily refers to Citrus × sinensis, which is also called
                sweet orange, to distinguish it from the related Citrus × aurantium,
                referred to as bitter orange.
              </Accordion>
            </>
          );
        }
        `,
      props: [
        {
          name: 'defaultToggled',
          type: 'boolean',
          description: `Set true to leave the panel open by default.`,
        },
        {
          name: 'title',
          type: 'string',
          description: `The title of the accordion.`,
        },
        {
          name: 'onToggle',
          type: 'function',
          description: `Callback function to fire when the accordion state is toggled.`,
        },
      ],
    },
  },
} as Meta;

const Example = ({ args }) => {
  return (
    <>
      <Accordion {...args}>
        An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide
        and are the most widely grown species in the genus Malus.
      </Accordion>
      <Accordion title="Oranges">
        The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus ×
        sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to
        as bitter orange.
      </Accordion>
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
  title: 'Apples',
  defaultToggled: true,
};
