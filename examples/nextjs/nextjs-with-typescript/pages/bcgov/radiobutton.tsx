import RadioButton from 'component-library-bcgov/RadioButton';
import BCGovTypography from '../../components/BCGovTypography';

export default function RadioButtonPage() {
  return (
    <>
      <BCGovTypography />
      <RadioButton size="small" label="Lorem ipsum dolor sit amet" name="samename" />
      <br />
      <RadioButton label="Lorem ipsum dolor sit amet" name="samename" />
      <br />
      <RadioButton size="large" label="Lorem ipsum dolor sit amet" name="samename" />
    </>
  );
}
