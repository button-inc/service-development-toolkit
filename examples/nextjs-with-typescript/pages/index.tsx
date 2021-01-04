import Button2 from 'component-library/Button';
import Checkbox from 'component-library/Checkbox';
import CheckboxGov from 'component-library-gov/Checkbox';
import Input from 'component-library-gov/Input';
import FieldsetGov from 'component-library-gov/Fieldset';

export default function Home() {
  return (
    <>
      <form action="">
        <div>
          <Checkbox size='mini' label="test" />
        </div>
        <div style={{ margin: '20px' }}>
          <CheckboxGov size={'large'} style={{ margin: '20px' }} label="large" />
        </div>
        <div>
          <Button2 large primary type="submit">
            Click!
          </Button2>
        </div>
        <div>
          <Input />
        </div>
        <div>
          <FieldsetGov title="hihihi" size='large'>
            <CheckboxGov size={'large'} style={{ margin: '20px' }} label="large" />
          </FieldsetGov>
        </div>
      </form>
    </>
  );
}
