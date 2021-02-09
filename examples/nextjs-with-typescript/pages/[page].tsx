import React from 'react';
import { Forms } from '../pangolin';

// @ts-ignore
export default function home({ page }) {
  const validPage = Number.isInteger(Number(page));
  const Form = Forms[Number(page)];

  const handleSubmit = () => console.log('submitted');

  return (
    <>
      <h1>Forms</h1>
      {validPage && <Form onSubmit={handleSubmit} />}
    </>
  );
}

export async function getServerSideProps({ query: params }) {
  // TODO: apply get function from library here
  const { page } = params;
  return {
    props: { page },
  };
}
