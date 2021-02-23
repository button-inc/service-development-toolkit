import RadioButton from 'component-library-bcgov/RadioButton';
import BCSans from '../components/BCSans';

export default function RadioButtonPage() {
  return (
    <>
      <BCSans />
      <RadioButton size="small" label="Lorem ipsum dolor sit amet" name="samename" />
      <br />
      <RadioButton label="Lorem ipsum dolor sit amet" name="samename" />
      <br />
      <RadioButton size="large" label="Lorem ipsum dolor sit amet" name="samename" />
    </>
  );
}
