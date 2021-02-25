import Checkbox from 'component-library-bcgov/Checkbox';
import BCGovTypography from '../../components/BCGovTypography';

export default function CheckboxPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <BCGovTypography />
      <Checkbox size="small" label="Lorem ipsum dolor sit amet" />
      <br />
      <Checkbox label="Lorem ipsum dolor sit amet" />
      <br />
      <Checkbox size="large" label="Lorem ipsum dolor sit amet" />
    </div>
  );
}
