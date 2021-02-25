import Textarea from 'component-library-bcgov/Textarea';
import BCGovTypography from '../components/BCGovTypography';

export default function TextareaPage() {
  return (
    <>
      <BCGovTypography />
      <Textarea label="Small Required" size="small" required />
      <br />
      <Textarea label="Medium Required" required />
      <br />
      <Textarea label="Large Required" size="large" required />
      <br />
      <Textarea label="Medium Resize None" resize="none" />
      <br />
      <Textarea label="Medium Resize Vertical" resize="vertical" />
      <br />
      <Textarea label="Medium Full Width" fullWidth />
    </>
  );
}
