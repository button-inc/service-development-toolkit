import Dropdown from 'component-library-button/Dropdown';
import ButtonTypography from '../../components/ButtonTypography';

const generateOptions = () => (
  <>
    <option value="option1">Option 1</option>
    <option value="option1">Option 2</option>
    <option value="option1">Option 3</option>
    <option value="option1">Option 4</option>
    <option value="option1">Option 5</option>
  </>
);

export default function DropdownPage() {
  return (
    <>
      <ButtonTypography />
      <form action="">
        <Dropdown label="Field Label" size="small">
          {generateOptions()}
        </Dropdown>
        <br />
        <Dropdown label="Field Label">{generateOptions()}</Dropdown>
        <br />
        <Dropdown label="Field Label" size="large">
          {generateOptions()}
        </Dropdown>
        <br />
        <Dropdown variant="secondary" label="Field Label">
          {generateOptions()}
        </Dropdown>
        <br />
        <Dropdown label="Field Label" fullWidth onChange={console.log}>
          {generateOptions()}
        </Dropdown>
      </form>
    </>
  );
}
