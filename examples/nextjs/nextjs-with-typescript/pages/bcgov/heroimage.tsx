import HeroImage from 'component-library-bcgov/HeroImage';
import BCGovTypography from '../../components/BCGovTypography';

export default function AccordionPage() {
  return (
    <>
      <BCGovTypography />
      <HeroImage url="https://bcparks.ca/_shared/images/backgrounds/Tunkwa-Iain-Robert-Reid.jpg">
        <h2>Header Text</h2>
        <p>This is a subtitle with some extra information</p>
        <a href="#link1">This is a link</a>
      </HeroImage>
    </>
  );
}
