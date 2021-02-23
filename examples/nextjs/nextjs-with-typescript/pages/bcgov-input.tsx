import Input from 'component-library-bcgov/Input';
import BCSans from '../components/BCSans';

export default function InputPage() {
  return (
    <>
      <BCSans />
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
