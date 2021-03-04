import React, { useState } from 'react';
import Button from '@button-inc/button-theme/Button';
import ButtonTypography from '../../components/ButtonTypography';

export default function ButtonPage() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ButtonTypography />
      <Button variant="primary" disabled={disabled}>
        Primary
      </Button>
      &nbsp;
      <Button variant="secondary" disabled={disabled}>
        Secondary
      </Button>
      &nbsp;
      <Button variant="warning" disabled={disabled}>
        Warning
      </Button>
      &nbsp;
      <button type="button" onClick={() => setDisabled(true)}>
        Disable Them!
      </button>
    </>
  );
}
