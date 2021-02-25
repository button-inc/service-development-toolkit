import Link from 'next/link';
import Navigation from 'component-library-bcgov/Navigation';
import Footer from 'component-library-bcgov/Footer';
import BCSans from '../components/BCSans';

const Menu = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/1">Begin Form</Link>
    </li>
  </ul>
);

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <BCSans />
      <Navigation title="Hello British Columbia" onBannerClick={console.log}>
        <Menu />
      </Navigation>

      <div className="container">
        <Component {...pageProps} />
      </div>

      <Footer>
        <Menu />
      </Footer>
      {/* @ts-ignore */}
      <style jsx>
        {`
          body {
            margin: 0;
          }
          .container {
            min-height: 90vh;
            padding: 50px;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
