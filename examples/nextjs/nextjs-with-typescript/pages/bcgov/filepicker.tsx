import React, { useState } from 'react';
import FilePicker from 'component-library-bcgov/FilePicker';
import BCGovTypography from '../../components/BCGovTypography';

export default function FilePickerPage() {
  return (
    <>
      <BCGovTypography />
      <FilePicker label="Upload a file" size="small">
        Choose File
      </FilePicker>
      <br />
      <FilePicker label="Upload a file" required>
        Choose File
      </FilePicker>
      <br />
      <FilePicker label="Upload a file" size="large">
        Choose File
      </FilePicker>
    </>
  );
}
