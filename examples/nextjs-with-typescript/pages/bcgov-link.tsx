import Link from 'component-library-bcgov/Link';

export default function LinkPage() {
  return (
    <>
      <Link href="#link1" content="Lorem ipsum dolor sit amet" size="small" icon />
      <br />
      <Link href="#link1" content="Lorem ipsum dolor sit amet" size="medium" icon />
      <br />
      <Link href="#link1" content="Lorem ipsum dolor sit amet" size="large" />
      <br />
      <Link href="#link1">Lorem ipsum dolor sit amet</Link>
      <br />
      <Link href="#link1" content="Lorem ipsum dolor sit amet" icon />
    </>
  );
}
