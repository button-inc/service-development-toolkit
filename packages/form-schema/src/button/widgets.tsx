import Checkbox from 'button-theme/Checkbox';
import RadioButton from 'button-theme/RadioButton';
import Input from 'button-theme/Input';
import Dropdown from 'button-theme/Dropdown';
import FilePicker from 'button-theme/FilePicker';
import Textarea from 'button-theme/Textarea';
import DatePicker from 'button-theme/DatePicker';
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
