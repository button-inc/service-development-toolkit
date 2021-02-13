import Button from 'component-library-button/Button';

export default function ButtonPage() {
  return (
    <>
      <Button variant="primary">Primary</Button>&nbsp;
      <Button variant="secondary">Secondary</Button>&nbsp;
      <Button variant="warning">Warning</Button>
      <br />
      <br />
      <Button variant="primary" disabled>
        Primary
      </Button>
      &nbsp;
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      &nbsp;
      <Button variant="warning" disabled>
        Warning
      </Button>
    </>
  );
}
