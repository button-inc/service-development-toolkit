import Header from 'component-library-bcgov/Header';
import BCSans from '../components/BCSans';

export default function HeaderPage() {
  return (
    <>
      <BCSans />
      <Header title="Hello British Columbia" onBannerClick={console.log} />
    </>
  );
}
