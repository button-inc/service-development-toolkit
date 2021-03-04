import Header from '@button-inc/bcgov-theme/Header';
import BCGovTypography from '../../components/BCGovTypography';

export default function HeaderPage() {
  return (
    <>
      <BCGovTypography />
      <Header title="Hello British Columbia" onBannerClick={console.log} />
    </>
  );
}
