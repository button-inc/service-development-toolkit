import React, { useState } from 'react';
import FilePicker from 'component-library-bcgov/FilePicker';
import BCSans from '../components/BCSans';

export default function FilePickerPage() {
  return (
    <>
      <BCSans />
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
