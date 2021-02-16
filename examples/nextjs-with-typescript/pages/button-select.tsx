import Select from 'component-library-button/Select';

const generateOptions = () => (
  <>
    <option value="option1">Option 1</option>
    <option value="option1">Option 2</option>
    <option value="option1">Option 3</option>
    <option value="option1">Option 4</option>
    <option value="option1">Option 5</option>
  </>
);

export default function SelectPage() {
  return (
    <>
      <form action="">
        <Select label="Field Label" size="small">
          {generateOptions()}
        </Select>
        <br />
        <Select label="Field Label">{generateOptions()}</Select>
        <br />
        <Select label="Field Label" size="large">
          {generateOptions()}
        </Select>
        <br />
        <Select variant="secondary" label="Field Label">
          {generateOptions()}
        </Select>
        <br />
        <Select label="Field Label" fullWidth onChange={console.log}>
          {generateOptions()}
        </Select>
      </form>
    </>
  );
}
