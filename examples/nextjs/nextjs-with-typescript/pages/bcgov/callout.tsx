import Callout from 'bcgov-theme/Callout';
import BCGovTypography from '../../components/BCGovTypography';

export default function CalloutPage() {
  return (
    <>
      <BCGovTypography />
      <Callout content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus." />
      <br />
      <Callout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus.</Callout>
    </>
  );
}
