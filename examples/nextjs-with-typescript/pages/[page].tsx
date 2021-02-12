import React from 'react';
import { applySession } from 'next-session';
import { useRouter } from 'next/router';
import { Forms, getHandler } from '../pangolin';
import { formData } from '../db';

function handlePageLoad(_formIndex: number) {
  return formData.data;
}

// @ts-ignore
export default function home({ formIndex, formData, validPage }) {
  const Form = Forms[formIndex];
  const router = useRouter();

  const rerouteHandler = (nextPage: string, isValid: boolean, lastPage: boolean) => {
    // TODO: Hook up isValid
    router.push(lastPage ? nextPage : '/end');
  };

  return (
    <>
      <h1>Forms</h1>
      {validPage && <Form formData={formData} rerouteHandler={rerouteHandler} />}
      {!validPage && <h1>page out of range</h1>}
    </>
  );
}

export async function getServerSideProps({ query: params, req, res }: any) {
  await applySession(req, res);
  const { formIndex, formData, validPage } = getHandler(req, handlePageLoad);
  // const { formIndex, formData, validPage } = getHandler(req);
  console.log(formData);

  return {
    props: { formIndex, formData, validPage },
  };
}
