import Accordion from 'button-theme/Accordion';
import ButtonTypography from '../../components/ButtonTypography';

export default function AccordionPage() {
  return (
    <>
      <ButtonTypography />
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
