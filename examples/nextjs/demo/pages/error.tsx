import Alert from 'bcgov-theme/Alert';
import { useRouter } from 'next/router';

export default function NavigationPage() {
  const router = useRouter();
  const { errors } = router.query;
  console.log(errors);
  return (
    <>
      <div style={{ padding: '2rem', height: '100vh' }}>
        <br />
        <Alert variant="danger">You have failed!</Alert>
        <h1>Errors:</h1>
        <ul>{Array.isArray(errors) && errors.map(err => <li>{err}</li>)}</ul>
      </div>
    </>
  );
}
