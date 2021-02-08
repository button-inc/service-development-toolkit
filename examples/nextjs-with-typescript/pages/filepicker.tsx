import FilePickerGov from 'component-library-gov/FilePicker';

export default function FilePicker() {
  return (
    <>
      <form action="">
        <FilePickerGov size="tiny" />
        <hr />
        <FilePickerGov size="medium" variant="secondary" name="filepicker" label="File Picker 2" />
        <hr />
        <FilePickerGov label="File Picker 3" display="block" onChange={console.log} />
      </form>
    </>
  );
}
