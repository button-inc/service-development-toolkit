import Button2 from 'component-library/Button';
import Checkbox from 'component-library/Checkbox';
import CheckboxGov from 'component-library-gov/Checkbox';
import Input from 'component-library-gov/Input';

export default function Home() {
  return (
    <>
      <form action="">
        <div>
          {/* Base checkbox has default options */}
          <Checkbox mini style={{ margin: '20px' }} label="test" />
          <Checkbox tiny style={{ margin: '20px' }} label="test" />
          <Checkbox small style={{ margin: '20px' }} label="test" />
          <Checkbox medium style={{ margin: '20px' }} label="test" />
          <Checkbox large style={{ margin: '20px' }} label="test" />
          <Checkbox big style={{ margin: '20px' }} label="test" />
          <Checkbox huge style={{ margin: '20px' }} label="test" />
        </div>
        <div style={{ margin: '20px' }}>
          {/* Styled checkbox falls back to tiny style from default props unless prop defined */}
          <CheckboxGov mini style={{ margin: '20px' }} label="test" />
          <CheckboxGov tiny style={{ margin: '20px' }} label="test" />
          <CheckboxGov small style={{ margin: '20px' }} label="test" />
          <CheckboxGov medium style={{ margin: '20px' }} label="test" />
          <CheckboxGov large style={{ margin: '20px' }} label="test" />
          <CheckboxGov big style={{ margin: '20px' }} label="test" />
          <CheckboxGov huge style={{ margin: '20px' }} label="test" />
        </div>
        <div>
          <Button2 large primary type="submit">
            Click!
          </Button2>
        </div>
        <div>
          <Input />
        </div>
      </form>
    </>
  );
}
