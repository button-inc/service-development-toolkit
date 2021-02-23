import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TypographyStyle } from 'react-typography';
import '@bcgov/bc-sans/css/BCSans.css';
import Navigation from '../src/Navigation';
import Footer from '../src/Footer';
import Alert from '../src/Alert';
import Input from '../src/Input';
import Checkbox from '../src/Checkbox';
import RadioButton from '../src/RadioButton';
import Button from '../src/Button';
import Callout from '../src/Callout';
import Dropdown from '../src/Dropdown';
import Textarea from '../src/Textarea';
import typography from '../src/BCSans';

export default {
  title: '_Page',
} as Meta;

const Menu = () => (
  <ul>
    <li>
      <a href=".">Link 2</a>
    </li>
    <li>
      <a href=".">Link 2</a>
    </li>
    <li>
      <a href=".">Link 3</a>
    </li>
    <li>
      <a href=".">Link 4</a>
    </li>
    <li>
      <a href=".">Link 5</a>
    </li>
    <li>
      <a href=".">Link 6</a>
    </li>
  </ul>
);

const Template: Story = args => (
  <div style={{ border: '1px solid black' }}>
    <TypographyStyle typography={typography} />
    <Navigation title="Hello British Columbia" onBannerClick={console.log}>
      <Menu />
    </Navigation>
    <div style={{ padding: '2rem' }}>
      <Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus." />
      <br />
      <Input label="Name" required fullWidth />
      <br />
      <h4>Select your choices</h4>
      <Checkbox name="checkbox" label="Option 1" />
      <br />
      <Checkbox name="checkbox" label="Option 2" />
      <br />
      <Checkbox name="checkbox" label="Option 3" />
      <br />
      <br />
      <h4>Select your choice</h4>
      <RadioButton name="radiobutton" label="Option 1" />
      <br />
      <RadioButton name="radiobutton" label="Option 2" />
      <br />
      <RadioButton name="radiobutton" label="Option 3" />
      <br />
      <br />
      <Dropdown label="Select your choice">
        <option value="option1">Option 1</option>
        <option value="option1">Option 2</option>
        <option value="option1">Option 3</option>
        <option value="option1">Option 4</option>
        <option value="option1">Option 5</option>
      </Dropdown>
      <br />
      <Textarea label="Enter text..." required fullWidth />
      <br />
      <Callout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus.</Callout>
      <br />
      <Button variant="primary">Submit</Button>
      &nbsp;
      <Button variant="secondary">Cancel</Button>
      <br />
    </div>
    <Footer>
      <Menu />
    </Footer>
  </div>
);

export const Default = Template.bind({});
