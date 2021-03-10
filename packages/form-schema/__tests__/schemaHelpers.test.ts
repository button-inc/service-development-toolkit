import {
  addWidgetsForFiles,
  splitSchema,
  getRequiredFields,
  createSchemaFromObject,
  getUiSchemaFromOptions,
} from '../src/utils/schemaUtils';
import { simplePropertySchema, expectedSimplePropertySchemas } from './fixtures/simpleSchema';
import { simpleDependencySchema, expectedSimpleDependencySchemas } from './fixtures/dependentSchema';
import { objectPropertySchema, expectedObjectPropertySchema } from './fixtures/objectSchema';
import { fileSchema, fileUiSchema } from './fixtures/fileSchema';

describe('addWidgetsForFiles', () => {
  const uiSchemaWithWidgets = addWidgetsForFiles(fileSchema, fileUiSchema);
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

describe('splitSchema', () => {
  it('splits single properties into expected schemas', () => {
    const schemas = splitSchema(simplePropertySchema);
    expect(schemas).toEqual(expectedSimplePropertySchemas);
  });

  it('splits nested schemas into expected result with dependencies', () => {
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
    const schema = createSchemaFromObject(currentField, []);
    expect(schema).toEqual(expectedObjectPropertySchema);
  });

  it('Creates expected schema with requirements', () => {
    const currentField = objectPropertySchema.properties.first;
    const schema = createSchemaFromObject(currentField, ['second']);
    expectedObjectPropertySchema.required = ['second'];
    expect(schema).toEqual(expectedObjectPropertySchema);
  });
});

describe('getUiSchemaFromOptions', () => {
  it('removes default labels if in options', () => {
    const options = { defaultLabels: false };
    const expectedUiSchema = {
      second: {
        'ui:options': {
          label: false,
        },
      },
      third: {
        'ui:options': {
          label: false,
        },
      },
    };
    const uiSchema = getUiSchemaFromOptions(objectPropertySchema, {}, options);
    expect(uiSchema).toEqual(expectedUiSchema);
  });

  it('adds a file widget if hasFiles is true', () => {
    const expectedUiSchema = {
      firstQuestion: {
        'ui:widget': 'FileWidget',
      },
      nestedQuestion: {
        'ui:widget': 'FileWidget',
      },
      thirdQuestion: {
        'ui:widget': 'FileWidget',
      },
    };
    const uiSchema = getUiSchemaFromOptions(fileSchema, {}, {});
    expect(uiSchema).toEqual(expectedUiSchema);
  });
});
