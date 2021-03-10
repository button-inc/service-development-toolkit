import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Grid from '../src/Grid';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Grid',
  component: Grid,
} as Meta;

const colStyle = {
  border: '1px solid black',
};

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Box = () => (
  <div
    style={{
      border: '1px solid black',
      height: `${getRandomInt(40) + 25}px`,
    }}
  >
    Column
  </div>
);

const Component = props => (
  <Grid {...props}>
    <Grid.Row collapse={props.collapse}>
      <Grid.Col span={5}>
        <Box />
      </Grid.Col>
      <Grid.Col span={15}>
        <Box />
      </Grid.Col>
    </Grid.Row>
    <Grid.Row gutter={[10, 10]}>
      <Grid.Col span={5}>
        <Box />
      </Grid.Col>
      <Grid.Col span={15}>
        <Box />
      </Grid.Col>
    </Grid.Row>
    <h3>Justify - Start, Align - Start</h3>
    <Grid.Row justify="start" align="top">
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
    </Grid.Row>
    <h3>Justify - End, Align - End</h3>
    <Grid.Row justify="end" align="bottom">
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
    </Grid.Row>
    <h3>Justify - Center, Align - Center</h3>
    <Grid.Row justify="center" align="center">
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
    </Grid.Row>
    <h3>Justify - Space Between</h3>
    <Grid.Row justify="space-between">
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
    </Grid.Row>
    <h3>Justify - Space Around</h3>
    <Grid.Row justify="space-around">
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
      <Grid.Col span={4}>
        <Box />
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Component {...args} />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Component {...args} />
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Component {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = { collapse: '500' };
