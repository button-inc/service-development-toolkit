import React from 'react';
import { applySession } from 'next-session';
import { useRouter } from 'next/router';
import { Forms, getHandler } from 'form-schema';
import Button from '@button-inc/bcgov-theme/Button';

export default function home({
  formIndex,
  formData,
  validPage,
  prevPageUrl,
}: {
  formIndex: number;
  formData: object;
  validPage: boolean;
  prevPageUrl: string | -1;
}) {
  const Form = Forms[formIndex];
  const router = useRouter();
  const prevUrl = prevPageUrl === -1 ? '/' : prevPageUrl;

  const rerouteHandler = (nextPage: string, errors: string[]) => {
    router.push({
      pathname: nextPage,
      query: { errors },
    });
  };

  function previousPage(e: any) {
    e.preventDefault();
    router.back();
  }

  return (
    <>
      <h1>Form</h1>
      {validPage && (
        <Form formData={formData} rerouteHandler={rerouteHandler} showErrorList={false}>
          <div className="buttons">
            <a href={prevUrl} onClick={previousPage}>
              <Button type="button" variant="secondary">
                Previous
              </Button>
            </a>
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
  const { formIndex, formData, prevPageUrl = -1, validPage } = getHandler(req);
  return {
    props: { formIndex, formData, prevPageUrl, validPage },
  };
}
