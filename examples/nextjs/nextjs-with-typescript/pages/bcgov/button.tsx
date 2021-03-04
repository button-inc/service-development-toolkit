import Button from '@button-inc/bcgov-theme/Button';
import BCGovTypography from '../../components/BCGovTypography';

const Buttons = ({ size }) => (
  <>
    <BCGovTypography />
    <Button variant="primary" size={size}>
      Primary
    </Button>
    &nbsp;
    <Button variant="primary-disabled" size={size} disabled>
      Primary Disabled
    </Button>
    &nbsp;
    <Button variant="secondary" size={size}>
      Secondary
    </Button>
    &nbsp;
    <Button variant="secondary-disabled" size={size} disabled>
      Primary Disabled
    </Button>
  </>
);

export default function ButtonPage() {
  return (
    <>
      <div
        style={{
          padding: '15px',
        }}
      >
        <Buttons size="small" />
        <br />
        <br />
        <Buttons size="medium" />
        <br />
        <br />
        <Buttons size="large" />
      </div>
      <div
        style={{
          backgroundColor: '#003366',
          padding: '15px',
        }}
      >
        <Button variant="primary-inverse">Primary Inverse</Button>&nbsp;
        <Button variant="secondary-inverse">Secondary Inverse</Button>
      </div>
    </>
  );
}
