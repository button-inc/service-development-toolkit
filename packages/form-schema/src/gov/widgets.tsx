import Checkbox from 'bcgov-theme/Checkbox';
import RadioButton from 'bcgov-theme/RadioButton';
import Input from 'bcgov-theme/Input';
import Dropdown from 'bcgov-theme/Dropdown';
import FilePicker from 'bcgov-theme/FilePicker';
import Textarea from 'bcgov-theme/Textarea';
import DatePicker from 'bcgov-theme/DatePicker';
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
