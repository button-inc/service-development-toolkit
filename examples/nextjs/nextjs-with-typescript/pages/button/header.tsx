import Header from '@button-inc/button-theme/Header';
import ButtonTypography from '../../components/ButtonTypography';

export default function HeaderPage() {
  return (
    <>
      <ButtonTypography />
      <Header onBannerClick={console.log} />
      <br />
      <Header onBannerClick={console.log} variant="secondary" />
    </>
  );
}
