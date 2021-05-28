import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Grid from '../src/Grid';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    justify: {
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'space-around', 'space-between'],
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['start', 'bottom', 'center'],
      },
    },
  },
  parameters: {
    details: {
      title: 'Grid',
      description: `The grid component allows users to organize their content. The Grid has a Grid.Row and Grid.Col subcomponents. In the example below,
      the red box outlines the grid row, the blue boxes outline the grid columns, and the black box outlines the column contents. Play around with the controls
      panel to adjust the gutters (padding), alignment, span and number of columns. For this example, the span prop will be applied to the center column,
      but can applied to all columns in general use.`,
      allEnabledDescription: `For fully enhanced environments, grids an be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers.`,
      htmlOnlyDescription: `Without css, columns will display as divs with default browser styling. Column border colors have been included for clarity.`,
      usageCode: `
        import Grid from "@button-inc/bcgov-theme/Grid";

        export default function Component() {
          return (
            <Grid cols={2}>
              <Grid.Row>
                <Grid.Col>
                  <p>50% width</p>
                </Grid.Col>
                <Grid.Col>
                  <p>50% width</p>
                </Grid.Col>
              </Grid.Row>
              <Grid.Row>
                <Grid.Col span={2}>
                  <p>Full width column</p>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          );
        }
        `,
      props: [
        {
          name: 'cols',
          type: 'number',
          description: `The number of columns. Pass to the base Grid component.`,
        },
        {
          name: 'span',
          type: 'number',
          description: `The number of grid columns to occupy. Pass to a Grid.Col component to have it span more than 1 column.`,
        },
        {
          name: 'justify',
          type: 'string',
          description: `How to justify the row contents horizontally. Pass to a Grid.Row component. You can use "start", "center", "end", "space-around", "space-between".`,
        },
        {
          name: 'align',
          type: 'string',
          description: `How to align the row contents vertically. Pass to a Grid.Row component. You can use "start", "center", or "end".`,
        },
        {
          name: 'gutter',
          type: 'Integer Array',
          description: `The padding to apply to a row. Pass to a Grid.Row component. Pass an array of integers representing pixels.`,
        },
      ],
    },
  },
} as Meta;

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max)) + 50;
};

const Box = ({ height, text = 'Col' }) => (
  <div
    style={{
      border: '1px solid black',
      height: `${height}px`,
    }}
  >
    {text}
  </div>
);

const Component = props => (
  <Grid cols={props.cols}>
    <Grid.Row style={{ border: '2px solid red' }} {...props}>
      <Grid.Col style={{ border: '2px solid blue' }}>
        <Box height={50} />
      </Grid.Col>
      <Grid.Col span={props.span} style={{ border: '2px solid blue' }}>
        <Box height={75} text="Adjust My Span" />
      </Grid.Col>
      <Grid.Col style={{ border: '2px solid blue' }}>
        <Box height={25} />
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Component {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  collapse: '500',
  justify: 'center',
  span: 6,
  align: 'center',
  cols: 10,
  gutter: [10, 10],
};
