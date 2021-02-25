import Navigation from 'component-library-bcgov/Navigation';
import Footer from 'component-library-bcgov/Footer';
import Alert from 'component-library-bcgov/Alert';
import Input from 'component-library-bcgov/Input';
import Checkbox from 'component-library-bcgov/Checkbox';
import RadioButton from 'component-library-bcgov/RadioButton';
import Button from 'component-library-bcgov/Button';
import Callout from 'component-library-bcgov/Callout';
import Dropdown from 'component-library-bcgov/Dropdown';
import Textarea from 'component-library-bcgov/Textarea';
import Link from 'component-library-bcgov/Link';
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
