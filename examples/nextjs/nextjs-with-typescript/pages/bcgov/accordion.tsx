import Accordion from 'component-library-bcgov/Accordion';
import BCGovTypography from '../../components/BCGovTypography';

export default function AccordionPage() {
  return (
    <>
      <BCGovTypography />
      <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
      <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
      <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
    </>
  );
}
