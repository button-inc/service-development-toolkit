import Dropdown from '@button-inc/bcgov-theme/Dropdown';
import BCGovTypography from '../../components/BCGovTypography';

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
      <BCGovTypography />
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
      <Dropdown label="Field Label" required onChange={console.log}>
        {generateOptions()}
      </Dropdown>
    </>
  );
}
