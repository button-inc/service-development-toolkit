import Header from 'component-library-bcgov/Header';

export default function HeaderPage() {
  return (
    <>
      <Header title="Hello British Columbia" onBannerClick={console.log} />
    </>
  );
}
