import Header from 'button-theme/Header';
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
