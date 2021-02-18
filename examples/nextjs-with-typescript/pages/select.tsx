import SelectGov from 'component-library-bcgov/Select';

const generateOptions = () => (
  <>
    <option value="option1">Option 1</option>
    <option value="option1">Option 2</option>
    <option value="option1">Option 3</option>
    <option value="option1">Option 4</option>
    <option value="option1">Option 5</option>
  </>
);

export default function Select() {
  return (
    <>
      <form action="">
        <SelectGov size="tiny">{generateOptions()}</SelectGov>
        <hr />
        <SelectGov size="medium" variant="secondary" name="select2" label="Select 2">
          {generateOptions()}
        </SelectGov>
        <hr />
        <SelectGov label="Select 3" fullWidth onChange={console.log}>
          {generateOptions()}
        </SelectGov>
      </form>
    </>
  );
}
