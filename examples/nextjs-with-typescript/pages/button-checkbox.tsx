import Checkbox from 'component-library-button/Checkbox';
import ButtonTypography from '../components/ButtonTypography';

export default function CheckboxPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <ButtonTypography />
      <Checkbox size="small" label="Lorem ipsum dolor sit amet" />
      <br />
      <Checkbox label="Lorem ipsum dolor sit amet" />
      <br />
      <Checkbox size="large" label="Lorem ipsum dolor sit amet" />
    </div>
  );
}
