import { addWidgetsForFiles, getSchemaOrder } from '../src/utils/schemaUtils';

const uiSchema = {
  'ui:hints': [],
  firstQuestion: {
    'ui:options': {
      label: false,
    },
  },
};

const orderedUiSchema = {
  'ui:order': ['one', 'two'],
};

const testSchema = {
  title: 'Launch Online Grant',
  properties: {
    firstQuestion: {
      type: 'string',
      title: 'First Question',
      hasFiles: true,
      name: 'firstQuestion',
    },
    secondQuestion: {
      type: 'string',
      name: 'secondQuestion',
      title: 'Second Question',
      enum: ['Yes', 'No', 'Rather not answer'],
    },
    thirdQuestion: {
      type: 'boolean',
      title: 'Third Question',
      hasFiles: true,
      name: 'thirdQuestion',
    },
    fourthQuestion: {
      type: 'object',
      properties: {
        nestedQuestion: {
          hasFiles: true,
        },
      },
    },
    fifthQuestion: {
      type: 'string',
    },
  },
};

describe('addWidgetsForFiles', () => {
  const uiSchemaWithWidgets = addWidgetsForFiles(testSchema, uiSchema);
  it('adds ui:widget property to ui schema file fields', () => {
    expect(uiSchemaWithWidgets.firstQuestion['ui:widget']).toBe('FileWidget');
    expect(uiSchemaWithWidgets.thirdQuestion['ui:widget']).toBe('FileWidget');
  });
  it('adds ui:widget property to ui schema for nested file fields', () => {
    expect(uiSchemaWithWidgets.nestedQuestion['ui:widget']).toBe('FileWidget');
  });
  it('does not affect previous properties', () => {
    expect(uiSchemaWithWidgets['ui:hints']).toEqual([]);
    expect(uiSchemaWithWidgets.firstQuestion['ui:options']).toEqual({ label: false });
  });
});

describe('getSchemaOrder', () => {
  it('returns the order from uiSchema if defined', () => {
    const order = getSchemaOrder(testSchema, orderedUiSchema);
    expect(order).toEqual(['one', 'two']);
  });
  it('returns the insertion order otherwise', () => {
    const order = getSchemaOrder(testSchema, uiSchema);
    expect(order).toEqual([
      'firstQuestion',
      'secondQuestion',
      'thirdQuestion',
      'fourthQuestion',
      'nestedQuestion',
      'fifthQuestion',
    ]);
  });
});
