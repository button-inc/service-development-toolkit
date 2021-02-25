import Datepicker from 'component-library-button/Datepicker';
import ButtonTypography from '../../components/ButtonTypography';

export default function DatepickerPage() {
  return (
    <>
      <ButtonTypography />
      <Datepicker label="Birthday" size="small" required />
      <br />
      <Datepicker label="Birthday" required />
      <br />
      <Datepicker label="Birthday" size="large" required />
    </>
  );
}
