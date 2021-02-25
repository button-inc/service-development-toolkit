import { TypographyStyle } from 'react-typography';
import typography from '../src/typography';
import '@bcgov/bc-sans/css/BCSans.css';

export default function BCGovTypography() {
  return <TypographyStyle typography={typography} />;
}
