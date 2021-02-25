import Checkbox from 'component-library-bcgov/Checkbox';
import RadioButton from 'component-library-bcgov/RadioButton';
import Input from 'component-library-bcgov/Input';
import Dropdown from 'component-library-bcgov/Dropdown';
import FilePicker from 'component-library-bcgov/FilePicker';
import Textarea from 'component-library-bcgov/Textarea';
import DatePicker from 'component-library-bcgov/DatePicker';
import Wrapper from '../widgetWrapper';

export default {
  TextWidget: Wrapper(Input, 'input'),
  RadioWidget: Wrapper(RadioButton, 'radio'),
  CheckboxWidget: Wrapper(Checkbox, 'checkbox'),
  FileWidget: Wrapper(FilePicker, 'file'),
  SelectWidget: Wrapper(Dropdown, 'select'),
  TextareaWidget: Wrapper(Textarea, 'textarea'),
  DateWidget: Wrapper(DatePicker, 'date'),
};
