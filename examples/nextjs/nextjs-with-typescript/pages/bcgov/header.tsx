import Header from 'component-library-bcgov/Header';
import BCGovTypography from '../../components/BCGovTypography';

export default function HeaderPage() {
  return (
    <>
      <BCGovTypography />
      <Header title="Hello British Columbia" onBannerClick={console.log} />
    </>
  );
}
