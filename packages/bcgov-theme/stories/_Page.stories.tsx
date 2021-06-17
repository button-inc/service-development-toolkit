import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Navigation from '../src/Navigation';
import Footer from '../src/Footer';
import Alert from '../src/Alert';
import Input from '../src/Input';
import DatePicker from '../src/DatePicker';
import FilePicker from '../src/FilePicker';
import Fieldset from '../src/Fieldset';
import Accordion from '../src/Accordion';
import Card from '../src/Card';
import Checkbox from '../src/Checkbox';
import RadioButton from '../src/RadioButton';
import Button from '../src/Button';
import Callout from '../src/Callout';
import Dropdown from '../src/Dropdown';
import Textarea from '../src/Textarea';
import Link from '../src/Link';
import BCGovTypography from './BCGovTypography';

const Container = styled.div`
  & > * {
    margin-bottom: 20px;
  }
`;

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
  <form style={{ border: '1px solid black' }}>
    <BCGovTypography />
    <Navigation title="Hello British Columbia" onBannerClick={console.log} size={size}>
      <Menu />
    </Navigation>
    <Container style={{ padding: '2rem' }}>
      <Alert content="This is an alert. This box usually appears when the form is submitted." size={size} />
      <Input label="Name" required fullWidth size={size} />
      <h4>Favourite fruit?</h4>
      <Checkbox name="checkbox" label="Apple" size={size} />
      <Checkbox name="checkbox" label="Banana" size={size} />
      <Checkbox name="checkbox" label="Avocado" size={size} />
      <Fieldset title="Fieldset - What was your first car?">
        <RadioButton name="radiobutton" label="Honda Civic" size={size} />
        <br />
        <RadioButton name="radiobutton" label="Toyota Camry" size={size} />
        <br />
        <RadioButton name="radiobutton" label="Tesla Model 3" size={size} />
      </Fieldset>
      <Dropdown label="Select your choice" size={size}>
        <option value="option1">Option 1</option>
        <option value="option1">Option 2</option>
        <option value="option1">Option 3</option>
        <option value="option1">Option 4</option>
        <option value="option1">Option 5</option>
      </Dropdown>
      <FilePicker label="Certificate" size={size}>
        Upload
      </FilePicker>
      <DatePicker label="Birthday" required fullWidth size={size} />
      <Textarea label="Please write an essay (Min. 250 characters)" required fullWidth size={size} minLength={250} />
      <Callout size={size}>Callout components provide a presentation of content in a visually distinct manner.</Callout>
      <p>
        This is an internal example of a link to <Link href="#link1" content="access your application" size={size} />.
      </p>
      <div>
        <Accordion title="What is an accordion?">This</Accordion>
        <Accordion title="How to use an accordion?">Click the plus/minus sign</Accordion>
      </div>
      <Card title="Online Registration">
        If you'd like to register online please ensure that you have the{' '}
        <Link href="#link1" content="supporting documents" /> available
        <br /> <br />
        <Button>Click here to register</Button>
        <br /> <br />
        <Link href="#link1">
          Already registered? Click here to <strong>login</strong>
        </Link>
      </Card>
      <Button type="submit" variant="primary" size={size}>
        Submit
      </Button>
      &nbsp;
      <Button variant="secondary" size={size}>
        Cancel
      </Button>
      <br />
    </Container>
    <Footer>
      <Menu />
    </Footer>
  </form>
);

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};
