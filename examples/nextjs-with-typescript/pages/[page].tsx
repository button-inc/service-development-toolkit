import React from 'react';
import { applySession } from 'next-session';
import { Forms } from '../pangolin';

// @ts-ignore
export default function home({ page, formData }) {
  const validPage = Number.isInteger(Number(page));
  const Form = Forms[Number(page)];

  return (
    <>
      <h1>Forms</h1>
      {validPage && <Form formData={formData} />}
    </>
  );
}

export async function getServerSideProps({ query: params, req, res }: any) {
  // TODO: Move logic into onGet imported function
  await applySession(req, res);
  const { session = {} } = req;

  const { page } = params;
  const { formData = {} } = session;

  return {
    props: { page, formData },
  };
}
