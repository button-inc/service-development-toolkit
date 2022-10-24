import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Grid from '../src/Grid';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Grid',
  component: Grid,
} as Meta;

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

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Component {...args} />
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Component {...args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Component {...args} />
    </HtmlWithCssWrapper>
  </>
);
const args = { collapse: '500' };
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
