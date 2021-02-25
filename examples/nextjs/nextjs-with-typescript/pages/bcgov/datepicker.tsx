import Datepicker from 'component-library-bcgov/Datepicker';
import BCGovTypography from '../../components/BCGovTypography';

export default function DatepickerPage() {
  return (
    <>
      <BCGovTypography />
      <Datepicker label="Birthday" size="small" required />
      <br />
      <Datepicker label="Birthday" required />
      <br />
      <Datepicker label="Birthday" size="large" required />
    </>
  );
}