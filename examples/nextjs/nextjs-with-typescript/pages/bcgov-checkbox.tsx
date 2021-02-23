import Checkbox from 'component-library-bcgov/Checkbox';
import BCSans from '../components/BCSans';

export default function CheckboxPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <BCSans />
      <Checkbox size="small" label="Lorem ipsum dolor sit amet" />
      <br />
      <Checkbox label="Lorem ipsum dolor sit amet" />
      <br />
      <Checkbox size="large" label="Lorem ipsum dolor sit amet" />
    </div>
  );
}
