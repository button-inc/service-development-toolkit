import Navigation from '@button-inc/bcgov-theme/Navigation';
import Footer from '@button-inc/bcgov-theme/Footer';
import Alert from '@button-inc/bcgov-theme/Alert';
import Input from '@button-inc/bcgov-theme/Input';
import Checkbox from '@button-inc/bcgov-theme/Checkbox';
import RadioButton from '@button-inc/bcgov-theme/RadioButton';
import Button from '@button-inc/bcgov-theme/Button';
import Callout from '@button-inc/bcgov-theme/Callout';
import Dropdown from '@button-inc/bcgov-theme/Dropdown';
import Textarea from '@button-inc/bcgov-theme/Textarea';
import Link from '@button-inc/bcgov-theme/Link';
import DatePicker from '@button-inc/bcgov-theme/DatePicker';
import FilePicker from '@button-inc/bcgov-theme/FilePicker';
import BCGovTypography from '../../components/BCGovTypography';

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

export default function NavigationPage() {
  return (
    <>
      <BCGovTypography />
      <Navigation title="Hello British Columbia" onBannerClick={console.log}>
        <Menu />
      </Navigation>
      <div style={{ padding: '2rem', minHeight: '100vh' }}>
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
        <DatePicker label="select a date" />
        <FilePicker label="Choose a file">Choose File</FilePicker>
        <br />
        <Textarea label="Enter text..." required fullWidth />
        <br />
        <Callout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus.</Callout>
        <br />
        <p>
          This is an internal example of a link to <Link href="#link1" content="access your application" />.
        </p>
        <Button variant="primary">Submit</Button>
        &nbsp;
        <Button variant="secondary">Cancel</Button>
      </div>
      <Footer>
        <Menu />
      </Footer>
    </>
  );
}
