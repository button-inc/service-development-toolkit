import Checkbox from 'component-library-button/Checkbox';
import RadioButton from 'component-library-button/RadioButton';
import Input from 'component-library-button/Input';
import Dropdown from 'component-library-button/Dropdown';
import FilePicker from 'component-library-button/FilePicker';
import Textarea from 'component-library-button/Textarea';
import DatePicker from 'component-library-button/DatePicker';
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
