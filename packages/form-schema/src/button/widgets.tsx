import Checkbox from '@button-inc/button-theme/Checkbox';
import RadioButton from '@button-inc/button-theme/RadioButton';
import Input from '@button-inc/button-theme/Input';
import Dropdown from '@button-inc/button-theme/Dropdown';
import FilePicker from '@button-inc/button-theme/FilePicker';
import Textarea from '@button-inc/button-theme/Textarea';
import DatePicker from '@button-inc/button-theme/DatePicker';
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
