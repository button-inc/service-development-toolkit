import React from 'react';
import { applySession } from 'next-session';
import { useRouter } from 'next/router';
import { Forms, getHandler } from 'pangolin';
import Button from 'component-library-bcgov/Button';

// import formData from 'db';

// Can just pass regular rjsf templates to override fieldsets, layout, etc. and will pass through
function ObjectFieldTemplate({ properties, title }: any) {
  return (
    <>
      <h3>{title}</h3>
      <div>
        {properties.map((prop: any) => (
          <div key={prop.content}>{prop.content}</div>
        ))}
      </div>
    </>
  );
}

export default function home({
  formIndex,
  formData,
  validPage,
}: {
  formIndex: number;
  formData: object;
  validPage: boolean;
}) {
  const Form = Forms[formIndex];
  const router = useRouter();

  const rerouteHandler = (nextPage: string, _isValid: boolean, lastPage: boolean) => {
    router.push(lastPage ? '/end' : nextPage);
  };

  return (
    <>
      <h1>Form</h1>
      {validPage && (
        <Form
          formData={formData}
          rerouteHandler={rerouteHandler}
          ObjectFieldTemplate={ObjectFieldTemplate}
          showErrorList={false}
        >
          <div className="buttons">
            <Button type="button" onClick={() => router.back()} variant="secondary">
              Previous
            </Button>
            <Button style={{ marginLeft: '20px' }}>Continue</Button>
          </div>
        </Form>
      )}
      {!validPage && <h1>page out of range</h1>}
      {/* @ts-ignore */}
      <style jsx>
        {`
          .buttons {
            padding-top: 20px;
          }
        `}
      </style>
    </>
  );
}

export async function getServerSideProps({ req, res }: any) {
  await applySession(req, res);
  const { formIndex, formData, validPage } = getHandler(req);
  return {
    props: { formIndex, formData, validPage },
  };
}
