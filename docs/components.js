const components = [
  {
    name: 'Alert',
    stylableSections: ['container', 'header', 'content', 'group', 'close'],
    htmlOverrideSections: ['container', 'header', 'content', 'group'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Button',
    stylableSections: [],
    htmlOverrideSections: [],
    configOptions: [],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Callout',
    stylableSections: ['container'],
    htmlOverrideSections: ['container'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Card',
    stylableSections: ['container', 'header', 'toggle', 'content'],
    htmlOverrideSections: ['container', 'header', 'content'],
    configOptions: ['as', 'toggleable'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Checkbox',
    stylableSections: ['container', 'input', 'label', 'checkmark'],
    htmlOverrideSections: ['container'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Datepicker',
    stylableSections: ['container', 'wrapper', 'label', 'input'],
    htmlOverrideSections: ['container', 'wrapper'],
    configOptions: ['as', 'includeWrapper'],
    rendersChildComponents: 'No',
  },
  {
    name: 'Fieldset',
    stylableSections: ['container', 'legend'],
    htmlOverrideSections: [],
    configOptions: ['forwardProps'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'FilePicker',
    stylableSections: ['container', 'label', 'input'],
    htmlOverrideSections: ['container'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Footer',
    stylableSections: ['container', 'footer'],
    htmlOverrideSections: ['container', 'footer'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Grid',
    stylableSections: ['container', 'row', 'col'],
    htmlOverrideSections: ['container'],
    configOptions: ['cols', 'gutter', 'gutterUnit', 'justify', 'align'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'HeroImage',
    stylableSections: ['container', 'innerContainer'],
    htmlOverrideSections: [],
    configOptions: ['url'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Input',
    stylableSections: ['container', 'label', 'input', 'wrapper'],
    htmlOverrideSections: ['container', 'wrapper'],
    configOptions: ['as', 'includeWrapper'],
    rendersChildComponents: 'No',
  },
  {
    name: 'Link',
    stylableSections: ['link'],
    htmlOverrideSections: [],
    configOptions: ['href'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Menu',
    stylableSections: ['container', 'group', 'item'],
    htmlOverrideSections: ['container', 'group', 'item'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Modal',
    stylableSections: ['modal', 'header', 'content', 'footer', 'close'],
    htmlOverrideSections: ['modal', 'header', 'content', 'footer'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Navigation',
    stylableSections: ['container', 'toggle', 'sidebar'],
    htmlOverrideSections: ['container', 'sidebar'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Notification',
    stylableSections: ['container', 'header', 'content', 'group', 'close'],
    htmlOverrideSections: ['container', 'header', 'content', 'group'],
    configOptions: ['as'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'RadioButton',
    stylableSections: ['container', 'label', 'input', 'dot'],
    htmlOverrideSections: ['container'],
    configOptions: ['as'],
    rendersChildComponents: 'No',
  },
  {
    name: 'Select',
    stylableSections: ['container', 'label', 'wrapper', 'input'],
    htmlOverrideSections: ['container', 'wrapper'],
    configOptions: ['as', 'includeWrapper'],
    rendersChildComponents: 'Yes',
  },
  {
    name: 'Textarea',
    stylableSections: ['container', 'label', 'wrapper', 'input'],
    htmlOverrideSections: ['container', 'wrapper'],
    configOptions: ['as'],
    rendersChildComponents: 'No',
  },
];

module.exports = components;
