import Checkbox from '@button-inc/bcgov-theme/Checkbox';
import RadioButton from '@button-inc/bcgov-theme/RadioButton';
import Input from '@button-inc/bcgov-theme/Input';
import Dropdown from '@button-inc/bcgov-theme/Dropdown';
import FilePicker from '@button-inc/bcgov-theme/FilePicker';
import Textarea from '@button-inc/bcgov-theme/Textarea';
import DatePicker from '@button-inc/bcgov-theme/DatePicker';
import Wrapper from '../widgetWrapper';
import Checkboxes from '../components/CheckboxesWidget';

export default {
  TextWidget: Wrapper(Input, 'input'),
  RadioWidget: Wrapper(RadioButton, 'radio'),
  CheckboxWidget: Wrapper(Checkbox, 'checkbox'),
  CheckboxesWidget: Wrapper(Checkboxes, 'checkboxes'),
  FileWidget: Wrapper(FilePicker, 'file'),
  SelectWidget: Wrapper(Dropdown, 'select'),
  TextareaWidget: Wrapper(Textarea, 'textarea'),
  DateWidget: Wrapper(DatePicker, 'date'),
};
