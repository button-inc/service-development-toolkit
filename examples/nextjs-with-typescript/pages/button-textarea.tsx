import Textarea from 'component-library-button/Textarea';

export default function TextareaPage() {
  return (
    <>
      <Textarea label="Small Required" size="small" required />
      <br />
      <Textarea label="Medium Required" required />
      <br />
      <Textarea label="Large Required" size="large" required />
      <br />
      <Textarea label="Medium Warning" variant="warning" />
      <br />
      <Textarea label="Medium Resize None" resize="none" />
      <br />
      <Textarea label="Medium Resize Vertical" resize="vertical" />
      <br />
      <Textarea label="Medium Full Width" fullWidth />
    </>
  );
}
