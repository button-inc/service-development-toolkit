const uiSchema = {
  businessPhone: {
    'ui:help': 'Please use the format xxx-xxx-xxxx',
  },
  businessAddress: {
    'ui:help': 'For example: 1111 Government St. A1A 1A1',
  },
  pstNumber: {
    'ui:help': 'For example: PST-1234-5678',
  },
  federalBusinessNumber: {
    'ui:help': 'For example: 123456789',
  },
  gstNumber: {
    'ui:help': 'For example: 123456789 RT 0001',
  },
  isCurrentlyOperating: {
    'ui:help':
      'Businesses not currently operating due to a public health order affecting their business or sector are not eligible for the program. Businesses that only operate seasonally, but that are ready to open during the appropriate season (and that otherwise meet all other eligibility criteria) will be considered operating.',
    'ui:widget': 'radio',
  },
  email: {
    'ui:help': 'Please use the format name@email.com',
  },
  revenue2019: {
    'ui:help': 'Please enter in a numerical value only (no symbols)',
  },
  workSafeBcRegistrationNumber: {
    'ui:help': 'This field is required if answering yes',
  },
  sectorOther: {
    'ui:help': 'This field is required if answering Other',
  },
  productionLocation: {
    'ui:help': 'This field is required if answering No',
  },
  onlineStore: {
    existingOnlineStore: {
      'ui:widget': 'radio',
    },
    onlineStoreUrl: {
      'ui:help': 'This field is required if answering Yes',
    },
    otherPrograms: {
      'ui:help': 'This field is required if answering Yes',
    },
    existingStoreFeatures: {
      'ui:widget': 'checkboxes',
    },
  },
  planForFunds: {
    'ui:widget': 'TextareaWidget',
  },
  otherPrograms: {
    'ui:widget': 'TextareaWidget',
  },

  // This prevents conditional fields from rendering at the end of the form
  'ui:order': [
    'businessName',
    'businessWebsite',
    'primaryContactName',
    'primaryContactPosition',
    'businessPhone',
    'email',
    'businessAddress',
    'bcOwned',
    'locatedInBc',
    'isCurrentlyOperating',
    'pstNumber',
    'bcRegistrationID',
    'federalBusinessNumber',
    'gstNumber',
    'incomeTaxesFiled',
    'revenue2019',
    'workSafeBcRegistered',
    'workSafeBcRegistrationNumber',
    'sector',
    'sectorOther',
    'region',
    'isIndigenous',
    'repeatableProducts',
    'cannabisProducts',
    'madeInBc',
    'productionLocation',
    'employees',
    'importExportBusiness',
    'onlineStore',
    'existingOnlineStore',
    'onlineStoreUrl',
    'existingStoreFeatures',
    'canMeetDeadline',
    'otherCovidFunding',
    'otherPrograms',
    'planForFunds',
    'useOfGrant',
    'personalInformation',
    'taxImplications',
  ],
};

export default uiSchema;
