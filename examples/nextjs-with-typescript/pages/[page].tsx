import React from 'react';
import { applySession } from 'next-session';
import { Forms, getHandler } from '../pangolin';

// @ts-ignore
export default function home({ formIndex, formData, validPage }) {
  const Form = Forms[formIndex];
  return (
    <>
      <h1>Forms</h1>
      {validPage && <Form formData={formData} />}
    </>
  );
}

export async function getServerSideProps({ query: params, req, res }: any) {
  await applySession(req, res);
  const { formIndex, formData, validPage } = getHandler(req);

  return {
    props: { formIndex, formData, validPage },
  };
}
