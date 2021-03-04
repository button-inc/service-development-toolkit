import Input from '@button-inc/button-theme/Input';
import ButtonTypography from '../../components/ButtonTypography';

export default function InputPage() {
  return (
    <>
      <ButtonTypography />
      <Input label="Field Label" size="small" required />
      <br />
      <Input label="Field Label" required />
      <br />
      <Input label="Field Label" size="large" required />
      <br />
      <Input label="Field Label" variant="warning" type="email" />
      <br />
      <Input label="Field Label" type="email" fullWidth />
    </>
  );
}
