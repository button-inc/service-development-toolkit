import Radio from 'component-library-gov/RadioButton';
import Fieldset from 'component-library-gov/Fieldset';

export default function FieldsetPage() {
  return (
    <>
      <form action="">
        <Fieldset title="Fieldset" name="option">
          <Radio label="Yes" size="tiny" />
          <Radio label="No" size="medium" />
          <Radio label="No" size="medium" name="new name" />
        </Fieldset>
      </form>
    </>
  );
}