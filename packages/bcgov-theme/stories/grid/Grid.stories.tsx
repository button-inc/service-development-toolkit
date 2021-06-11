import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Grid from '../../src/Grid';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes,
} as Meta;

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

const Template: Story = props => (
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

//  Duplication is to make the subcomponents show in all code blocks
const HTMLTemplate: Story = props => (
  <HtmlOnlyWrapper>
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
  </HtmlOnlyWrapper>
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

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  collapse: '500',
  justify: 'center',
  span: 6,
  align: 'center',
  cols: 10,
  gutter: [10, 10],
};
