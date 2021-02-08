import Checkbox from 'component-library-gov/Checkbox';

export default function CheckboxPage() {
  return (
    <>
      <form action="">
        <Checkbox label="First" size="tiny" variant="secondary" name="test name" />
        <Checkbox label="Second" size="medium" type="email" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
