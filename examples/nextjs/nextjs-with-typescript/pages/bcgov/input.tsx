import Input from '@button-inc/bcgov-theme/Input';
import BCGovTypography from '../../components/BCGovTypography';

export default function InputPage() {
  return (
    <>
      <BCGovTypography />
      <Input label="First Name" size="small" required />
      <br />
      <Input label="First Name" required />
      <br />
      <Input label="First Name" size="large" required />
      <br />
      <Input label="First Name" type="email" fullWidth />
    </>
  );
}
