import formsData from 'db';

function Data({ name, value }: any) {
  return (
    <div>
      <span>
        <strong>{name}</strong>
      </span>
      :{' '}
      <span>
        {typeof value === 'object'
          ? Object.entries(value).map(([name, value]) => (
              <>
                |{' '}
                <span>
                  <strong>{name}</strong>: {value}{' '}
                </span>
              </>
            ))
          : String(value)}
      </span>
    </div>
  );
}

function End({ formsData }: any) {
  Object.entries(formsData).forEach(entry => console.log(entry));
  return (
    <>
      <h1>You have completed the form.</h1>
      <table>
        <tr>
          <td>id</td>
          <td>data</td>
        </tr>
        {Object.entries(formsData).map(([id, data]: any) => {
          return (
            <tr>
              <td>{id}</td>
              <td>
                {Object.entries(data).map(([name, value]) => {
                  return <Data name={name} value={value} />;
                })}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default End;

export async function getServerSideProps() {
  return {
    props: { formsData },
  };
}
