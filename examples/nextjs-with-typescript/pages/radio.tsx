import Radio from 'component-library-gov/RadioButton';

export default function Select() {
  return (
    <>
      <form action="">
        <Radio label="Yes" name="option" size="tiny" />
        <Radio label="No" name="option" size="medium" />
      </form>
    </>
  );
}
