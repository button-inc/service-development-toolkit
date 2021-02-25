import Link from 'component-library-bcgov/Link';
import BCGovTypography from '../../components/BCGovTypography';

export default function LinkPage() {
  return (
    <>
      <BCGovTypography />
      <Link href="#link1" content="Lorem ipsum dolor sit amet" size="small" external />
      <br />
      <Link href="#link1" content="Lorem ipsum dolor sit amet" size="medium" external />
      <br />
      <Link href="#link1" content="Lorem ipsum dolor sit amet" size="large" />
      <br />
      <Link href="#link1">Lorem ipsum dolor sit amet</Link>
      <br />
      <Link href="#link1" content="Lorem ipsum dolor sit amet" external />
    </>
  );
}
