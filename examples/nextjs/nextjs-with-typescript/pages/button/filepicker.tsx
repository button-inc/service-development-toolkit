import React, { useState } from 'react';
import FilePicker from 'component-library-button/FilePicker';
import ButtonTypography from '../../components/ButtonTypography';

export default function FilePickerPage() {
  return (
    <>
      <ButtonTypography />
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
