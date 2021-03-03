import Navigation from 'bcgov-theme/Navigation';
import Footer from 'bcgov-theme/Footer';
import Alert from 'bcgov-theme/Alert';
import Input from 'bcgov-theme/Input';
import Checkbox from 'bcgov-theme/Checkbox';
import RadioButton from 'bcgov-theme/RadioButton';
import Button from 'bcgov-theme/Button';
import Callout from 'bcgov-theme/Callout';
import Dropdown from 'bcgov-theme/Dropdown';
import Textarea from 'bcgov-theme/Textarea';
import Link from 'bcgov-theme/Link';
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
      <div style={{ padding: '2rem', height: '100vh' }}>
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
