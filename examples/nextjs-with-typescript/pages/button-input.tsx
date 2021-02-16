import Input from 'component-library-button/Input';

export default function InputPage() {
  return (
    <>
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
