import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal } from '../src/Modal';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    id: {
      description: 'The id applied to the outer container. Link to this id to open the modal.',
    },
  },
} as Meta;

const Component = ({ args }) => {
  return (
    <Modal {...args} style={{ visibility: 'visible', position: 'relative' }}>
      <Modal.Header>
        I am a modal header placeholder. <Modal.Close>Close</Modal.Close>
      </Modal.Header>
      <Modal.Content>I am modal content placeholder.</Modal.Content>
    </Modal>
  );
};

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Component args={args} />
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Component args={args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Component args={args} />
    </HtmlWithCssWrapper>
  </>
);

const args = {
  id: 'modal',
};

export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
