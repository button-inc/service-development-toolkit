import buildForms from '../src/buildForms';

const firstUrl = '/api/test-1';
const secondUrl = '/api/2';

const urlArray = ['test-1', ''];

const mockSchema: any = {
  title: 'Title',
  type: 'object',
  properties: {
    firstQuestion: {
      type: 'object',
      urlPostfix: firstUrl,
      properties: {},
    },
    secondQuestion: {
      type: 'string',
    },
  },
};

const mockUiSchema = {
  'ui:order': ['firstQuestion', 'secondQuestion'],
};

describe('buildForms', () => {
  const { Forms } = buildForms(mockSchema, mockUiSchema, '/', '/api', {}, urlArray);
  it('creates an array of form components', () => {
    expect(Array.isArray(Forms)).toBe(true);
  });
  it('provides expected post route to forms', () => {
    const { Forms } = buildForms(mockSchema, mockUiSchema, '/', '/api', {}, urlArray);
    const firstForm = Forms[0]();
    expect(firstForm.props.action).toBe(firstUrl);
    const secondForm = Forms[1]();
    expect(secondForm.props.action).toBe(secondUrl);
  });
});
