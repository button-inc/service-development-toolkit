import Callout from 'component-library-bcgov/Callout';
import BCSans from '../components/BCSans';

export default function CalloutPage() {
  return (
    <>
      <BCSans />
      <Callout content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus." />
      <br />
      <Callout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus.</Callout>
    </>
  );
}
