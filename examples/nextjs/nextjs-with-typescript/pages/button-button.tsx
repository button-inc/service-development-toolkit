import React, { useState } from 'react';
import Button from 'component-library-button/Button';

export default function ButtonPage() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
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
