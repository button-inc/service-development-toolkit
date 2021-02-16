import React from 'react';
import { applySession } from 'next-session';
import { useRouter } from 'next/router';
import { Forms, getHandler } from 'pangolin';
import formData from 'db';

// Can just pass regular rjsf templates to override fieldsets, layout, etc. and will pass through
function ObjectFieldTemplate({ properties }: { properties: any }) {
  return (
    <>
      <div>
        {properties.map((prop: any) => (
          <div>{prop.content}</div>
        ))}
      </div>
    </>
  );
}

const handlePageLoad = (formIndex: string) => formData[formIndex];

// @ts-ignore
export default function home({ formIndex, formData, validPage }) {
  const Form = Forms[formIndex];
  const router = useRouter();

  const rerouteHandler = (nextPage: string, _isValid: boolean, lastPage: boolean) => {
    router.push(lastPage ? '/end' : nextPage);
  };

  return (
    <>
      <h1>Forms</h1>
      {validPage && (
        <Form formData={formData} rerouteHandler={rerouteHandler} ObjectFieldTemplate={ObjectFieldTemplate} />
      )}
      {!validPage && <h1>page out of range</h1>}
    </>
  );
}

export async function getServerSideProps({ req, res }: any) {
  await applySession(req, res);
  const { formIndex, formData = {}, validPage } = getHandler(req, handlePageLoad);
  return {
    props: { formIndex, formData, validPage },
  };
}
