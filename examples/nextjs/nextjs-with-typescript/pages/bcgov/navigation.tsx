import Navigation from 'component-library-bcgov/Navigation';
import BCGovTypography from '../../components/BCGovTypography';

const Menu = () => (
  <ul>
    <li>
      <a href=".">Link 2</a>
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

export default function NavigationPage() {
  return (
    <>
      <BCGovTypography />
      <Navigation title="Hello British Columbia" onBannerClick={console.log}>
        <Menu />
      </Navigation>
      <Navigation title={() => 'Hello British Columbia'} onBannerClick={console.log}>
        <Menu />
      </Navigation>
      <Navigation title="Hello British Columbia" onBannerClick={console.log} mobileMenu={() => <Menu />}>
        <Menu />
      </Navigation>
      <div style={{ border: '1px solid black', height: '100vh' }}>Content Body</div>
    </>
  );
}
