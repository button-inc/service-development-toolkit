import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from '../../../src/Header';
import Footer from '../../../src/Footer';
import Notification from '../../../src/Notification';
import Input from '../../../src/Input';
import DatePicker from '../../../src/DatePicker';
import FilePicker from '../../../src/FilePicker';
import Checkbox from '../../../src/Checkbox';
import RadioButton from '../../../src/RadioButton';
import Button from '../../../src/Button';
import Dropdown from '../../../src/Dropdown';
import Textarea from '../../../src/Textarea';
import ButtonTypography from '../../ButtonTypography';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../../../stories/helpers';

export default {
  title: 'Getting Started/Toolkit in Action',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Page = ({ args }) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <ButtonTypography />
      <Header onBannerClick={console.log} {...args}>
        <ul>
          <li>
            <a href=".">HOME</a>
          </li>
          <li>
            <a href=".">ABOUT US</a>
          </li>
          <li>
            <a href=".">CONTACT</a>
          </li>
        </ul>
      </Header>
      <div style={{ padding: '2rem' }}>
        <Notification flex closable {...args}>
          <Notification.Group>
            <Notification.Header>Lectus Magna Efficitur</Notification.Header>
            <Notification.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna,
              efficitur nec mi eu, placerat lacinia sem.
            </Notification.Content>
          </Notification.Group>
          <Notification.Group align="right">
            <Notification.Close>Close</Notification.Close>
          </Notification.Group>
        </Notification>
        <br />
        <Input label="Name" required fullWidth {...args} />
        <br />
        <DatePicker label="Birthday" required fullWidth {...args} />
        <br />
        <FilePicker label="Certificate" {...args}>
          Upload
        </FilePicker>
        <br />
        <h4>Select your choices</h4>
        <Checkbox name="checkbox" label="Option 1" {...args} />
        <br />
        <Checkbox name="checkbox" label="Option 2" {...args} />
        <br />
        <Checkbox name="checkbox" label="Option 3" {...args} />
        <br />
        <br />
        <h4>Select your choice</h4>
        <RadioButton name="radiobutton" label="Option 1" {...args} />
        <br />
        <RadioButton name="radiobutton" label="Option 2" {...args} />
        <br />
        <RadioButton name="radiobutton" label="Option 3" {...args} />
        <br />
        <br />
        <Dropdown label="Select your choice" {...args}>
          <option value="option1">Option 1</option>
          <option value="option1">Option 2</option>
          <option value="option1">Option 3</option>
          <option value="option1">Option 4</option>
          <option value="option1">Option 5</option>
        </Dropdown>
        <br />
        <Textarea label="Enter text..." required fullWidth {...args} />
        <br />
        <Button variant="primary" {...args}>
          Submit
        </Button>
        &nbsp;
        <Button variant="secondary" {...args}>
          Cancel
        </Button>
        <br />
      </div>
      <Footer />
    </div>
  );
};

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Page args={args} />
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Page args={args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Page args={args} />
    </HtmlWithCssWrapper>
  </>
);

const args = {
  size: 'medium',
};

export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
