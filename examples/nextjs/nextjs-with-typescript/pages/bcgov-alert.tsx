import Alert from 'component-library-bcgov/Alert';
import BCSans from '../components/BCSans';

export default function AlertPage() {
  return (
    <>
      <BCSans />
      <Alert
        size="small"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus."
      />
      <br />
      <Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus." />
      <br />
      <Alert
        size="large"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus."
      />
      <br />
      <Alert
        variant="success"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus."
      />
      <br />
      <Alert
        variant="info"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus."
      />
      <br />
      <Alert
        variant="warning"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus."
      />
      <br />
      <Alert
        variant="danger"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus."
      />
      <br />
      <Alert
        closable
        variant="danger"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus."
      />
      <br />
      <Alert closable variant="danger">
        <button type="button">Lorem ipsum dolor sit amet</button>
      </Alert>
    </>
  );
}
