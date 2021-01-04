import SelectGov from 'component-library-gov/Select';

export default function Select() {
  return (
    <>
      <form action="">
        <SelectGov size="tiny" name="select1">
          <option value="option1">Option 1</option>
          <option value="option1">Option 2</option>
          <option value="option1">Option 3</option>
          <option value="option1">Option 4</option>
          <option value="option1">Option 5</option>
        </SelectGov>
        <hr />
        <SelectGov size="medium" variant="secondary" name="select2">
          <option value="option1">Option 1</option>
          <option value="option1">Option 2</option>
          <option value="option1">Option 3</option>
          <option value="option1">Option 4</option>
          <option value="option1">Option 5</option>
        </SelectGov>
      </form>
    </>
  );
}
