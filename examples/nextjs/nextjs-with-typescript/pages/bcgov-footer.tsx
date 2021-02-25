import Footer from 'component-library-bcgov/Footer';
import BCGovTypography from '../components/BCGovTypography';

const Menu = () => (
  <ul>
    <li>
      <a href=".">Link 1</a>
    </li>
    <li>
      <a href=".">Link 2</a>
    </li>
    <li>
      <a href=".">Link 3</a>
    </li>
    <li>
      <a href=".">Link 4</a>
    </li>
    <li>
      <a href=".">Link 5</a>
    </li>
    <li>
      <a href=".">Link 6</a>
    </li>
  </ul>
);

export default function FooterPage() {
  return (
    <>
      <BCGovTypography />
      <Footer>
        <Menu />
      </Footer>
    </>
  );
}
