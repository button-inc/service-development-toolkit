import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Alert from '../src/Alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const getIcon = variant => {
  switch (variant) {
    case 'success':
      return faCheckCircle;
    case 'info':
      return faInfoCircle;
    case 'warning':
      return faExclamationTriangle;
    case 'danger':
      return faExclamationCircle;
    default:
      return null;
  }
};

const Component = props => (
  <>
    <Alert {...props}>
      <Alert.Group>
        <FontAwesomeIcon icon={getIcon(props.variant)} />
      </Alert.Group>
      <Alert.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu, placerat lacinia sem.
      </Alert.Content>
      {props.closable && (
        <Alert.Group align="right">
          <Alert.Close>Close</Alert.Close>
        </Alert.Group>
      )}
    </Alert>
  </>
);

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Component {...args} />
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Component {...args} />
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Component {...args} />
  </>
);

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
  closable: false,
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  size: 'medium',
  closable: false,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
  closable: false,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'medium',
  closable: false,
};
