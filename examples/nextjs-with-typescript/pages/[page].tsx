import React from 'react';
import { applySession } from 'next-session';
import { useRouter } from 'next/router';
import { Forms, getHandler } from '../pangolin';
import { formData } from '../db';

// Return your data, and callback will clean it
// Note that gethandler still parses the page, and returns validPage for the user
// If making that optional this could probably be removed and getHandler could be
// optional to use
function onNewPage(_formIndex: number) {
  return formData.data;
}

// @ts-ignore
export default function home({ formIndex, formData, validPage }) {
  const Form = Forms[formIndex];
  const router = useRouter();

  const onPageOver = (nextPage: string, isValid: boolean) => {
    // TODO: Hook up isValid
    router.push(nextPage);
  };

  return (
    <>
      <h1>Forms</h1>
      {validPage && <Form formData={formData} onPageOver={onPageOver} />}
    </>
  );
}

export async function getServerSideProps({ query: params, req, res }: any) {
  await applySession(req, res);
  const { formIndex, formData, validPage } = getHandler(req, onNewPage);

  return {
    props: { formIndex, formData, validPage },
  };
}
