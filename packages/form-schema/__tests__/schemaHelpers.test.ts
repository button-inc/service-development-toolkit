import {
  addWidgetsForFiles,
  getSchemaOrder,
  splitSchema,
  getRequiredFields,
  createSchemaFromObject,
} from '../src/utils/schemaUtils';
import { simplePropertySchema, expectedSimplePropertySchemas } from './fixtures/simpleSchema';
import { simpleDependencySchema, expectedSimpleDependencySchemas } from './fixtures/dependentSchema';
import { objectPropertySchema, expectedObjectPropertySchema } from './fixtures/objectSchema';

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

describe('splitSchema', () => {
  it('splits single properties into expected schemas', () => {
    const schemas = splitSchema(simplePropertySchema);
    expect(schemas).toEqual(expectedSimplePropertySchemas);
  });

  it('splits nested schemas into expected result', () => {
    const schemas = splitSchema(simpleDependencySchema);
    expect(schemas).toEqual(expectedSimpleDependencySchemas);
  });
});

describe('getRequiredFields', () => {
  const allRequired = ['one', 'two', 'three'];
  const propertyNames = ['one', 'three'];
  it('Gets required fields for single properties', () => {
    const requiredFields = getRequiredFields(allRequired, propertyNames);
    expect(requiredFields).toEqual(['one', 'three']);
  });
});

describe('createSchemaFromObject', () => {
  it('Creates expected schema with no requirements', () => {
    const currentField = objectPropertySchema.properties.first;
    const schema = createSchemaFromObject(currentField, 'first', []);
    expect(schema).toEqual(expectedObjectPropertySchema);
  });

  it('Creates expected schema with requirements', () => {
    const currentField = objectPropertySchema.properties.first;
    const schema = createSchemaFromObject(currentField, 'first', ['second']);
    expectedObjectPropertySchema.required = ['second'];
    expect(schema).toEqual(expectedObjectPropertySchema);
  });
});
