import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Grid from '../src/Grid';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Grid',
  component: Grid,
} as Meta;

const Component = props => (
  <Grid {...props}>
    <Grid.Row collapse={props.collapse}>
      <Grid.Col span={5}>Column 1</Grid.Col>
      <Grid.Col span={15}>Column 2</Grid.Col>
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
