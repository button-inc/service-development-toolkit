import Input from 'component-library-gov/Input';

export default function InputPage() {
  return (
    <>
      <form action="">
        <Input label="First" size="tiny" variant="secondary" />
        <Input label="Second" size="medium" type="email" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
