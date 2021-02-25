import RadioButton from 'component-library-bcgov/RadioButton';
import ButtonTypography from '../../components/ButtonTypography';

export default function RadioButtonPage() {
  return (
    <>
      <ButtonTypography />
      <RadioButton size="small" label="Lorem ipsum dolor sit amet" name="samename" />
      <br />
      <RadioButton label="Lorem ipsum dolor sit amet" name="samename" />
      <br />
      <RadioButton size="large" label="Lorem ipsum dolor sit amet" name="samename" />
    </>
  );
}
