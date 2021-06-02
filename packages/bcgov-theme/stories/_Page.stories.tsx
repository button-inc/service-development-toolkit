import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Navigation from '../src/Navigation';
import Footer from '../src/Footer';
import Alert from '../src/Alert';
import Input from '../src/Input';
import DatePicker from '../src/DatePicker';
import FilePicker from '../src/FilePicker';
import Checkbox from '../src/Checkbox';
import RadioButton from '../src/RadioButton';
import Button from '../src/Button';
import Callout from '../src/Callout';
import Dropdown from '../src/Dropdown';
import Textarea from '../src/Textarea';
import Link from '../src/Link';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/_Page',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Menu = () => (
  <ul>
    <li>
      <a href=".">Link 1</a>
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

const Template: Story = ({ size }) => (
  <div style={{ border: '1px solid black' }}>
    <BCGovTypography />
    <Navigation title="Hello British Columbia" onBannerClick={console.log} size={size}>
      <Menu />
    </Navigation>
    <div style={{ padding: '2rem' }}>
      <Alert
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus."
        size={size}
      />
      <br />
      <Input label="Name" required fullWidth size={size} />
      <br />
      <DatePicker label="Birthday" required fullWidth size={size} />
      <br />
      <FilePicker label="Certificate" size={size}>
        Upload
      </FilePicker>
      <br />
      <h4>Select your choices</h4>
      <Checkbox name="checkbox" label="Option 1" size={size} />
      <br />
      <Checkbox name="checkbox" label="Option 2" size={size} />
      <br />
      <Checkbox name="checkbox" label="Option 3" size={size} />
      <br />
      <br />
      <h4>Select your choice</h4>
      <RadioButton name="radiobutton" label="Option 1" size={size} />
      <br />
      <RadioButton name="radiobutton" label="Option 2" size={size} />
      <br />
      <RadioButton name="radiobutton" label="Option 3" size={size} />
      <br />
      <br />
      <Dropdown label="Select your choice" size={size}>
        <option value="option1">Option 1</option>
        <option value="option1">Option 2</option>
        <option value="option1">Option 3</option>
        <option value="option1">Option 4</option>
        <option value="option1">Option 5</option>
      </Dropdown>
      <br />
      <Textarea label="Enter text..." required fullWidth size={size} />
      <br />
      <Callout size={size}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus.</Callout>
      <br />
      <p>
        This is an internal example of a link to <Link href="#link1" content="access your application" size={size} />.
      </p>
      <Button variant="primary" size={size}>
        Submit
      </Button>
      &nbsp;
      <Button variant="secondary" size={size}>
        Cancel
      </Button>
      <br />
    </div>
    <Footer>
      <Menu />
    </Footer>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};
