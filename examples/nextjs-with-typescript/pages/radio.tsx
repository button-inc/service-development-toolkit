import Radio from 'component-library-bcgov/RadioButton';

export default function RadioPage() {
  return (
    <>
      <form action="">
        <Radio label="Yes" name="option" size="tiny" />
        <Radio label="No" name="option" size="medium" />
      </form>
    </>
  );
}
