import Checkbox from 'component-library-gov/Checkbox';
import RadioButton from 'component-library-gov/RadioButton';
import Input from 'component-library-gov/Input';
import Select from 'component-library-gov/Select';
import Wrapper from '../widgetWrapper';

export default {
  TextWidget: Wrapper(Input, 'input'),
  RadioWidget: Wrapper(RadioButton),
  CheckboxWidget: Wrapper(Checkbox, 'checkbox'),
  SelectWidget: Wrapper(Select, 'select'),
};
