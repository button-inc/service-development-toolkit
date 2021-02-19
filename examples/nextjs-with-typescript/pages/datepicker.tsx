import DatePickerGov from 'component-library-bcgov/DatePicker';

export default function DatePicker() {
  return (
    <>
      <form action="">
        <DatePickerGov size="tiny" />
        <hr />
        <DatePickerGov size="medium" variant="secondary" name="select2" label="Select 2" />
        <hr />
        <DatePickerGov label="Select 3" display="block" onChange={console.log} />
      </form>
    </>
  );
}
