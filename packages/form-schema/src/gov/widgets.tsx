import Checkbox from 'component-library-bcgov/Checkbox';
import RadioButton from 'component-library-bcgov/RadioButton';
import Input from 'component-library-bcgov/Input';
import Dropdown from 'component-library-bcgov/Dropdown';
import FilePicker from 'component-library-bcgov/FilePicker';
import Wrapper from '../widgetWrapper';

export default {
  TextWidget: Wrapper(Input, 'input'),
  RadioWidget: Wrapper(RadioButton),
  CheckboxWidget: Wrapper(Checkbox, 'checkbox'),
  FileWidget: Wrapper(FilePicker, 'file'),
  SelectWidget: Wrapper(Dropdown, 'select'),
};
