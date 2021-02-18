import Checkbox from 'component-library-bcgov/Checkbox';
import RadioButton from 'component-library-bcgov/RadioButton';
import Input from 'component-library-bcgov/Input';
import Select from 'component-library-bcgov/Select';
import Wrapper from '../widgetWrapper';

export default {
  TextWidget: Wrapper(Input, 'input'),
  RadioWidget: Wrapper(RadioButton),
  CheckboxWidget: Wrapper(Checkbox, 'checkbox'),
  SelectWidget: Wrapper(Select, 'select'),
};
