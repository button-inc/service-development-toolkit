// Only use on required elements if non-zero
const REQUIRED_TEXT_MIN_LENGTH = 0;
const TEXT_MAX_LENGTH = 1000;
const CURRENCY_REGEX = '^([1-9]{1})[0-9]*(.[0-9]{1,2})?$';

const schema = {
  title: 'Launch Online Grant',
  type: 'object',
  required: [
    'businessName',
    'primaryContactName',
    'primaryContactPosition',
    'businessPhone',
    'email',
    'businessAddress',
    'bcOwned',
    'locatedInBc',
    'isCurrentlyOperating',
    'bcRegistrationID',
    'federalBusinessNumber',
    'gstNumber',
    'incomeTaxesFiled',
    'revenue2019',
    'workSafeBcRegistered',
    'region',
    'isIndigenous',
    'repeatableProducts',
    'cannabisProducts',
    'madeInBc',
    'employees',
    'importExportBusiness',
    'canMeetDeadline',
    'otherCovidFunding',
    'sector',
    // GRANT PROPOSAL SECTION
    'planForFunds',
    'useOfGrant',
    'personalInformation',
    'taxImplications',
  ],
  dependencies: {
    workSafeBcRegistered: {
      oneOf: [
        {
          properties: {
            workSafeBcRegistered: {
              enum: [false],
            },
          },
        },
        {
          properties: {
            workSafeBcRegistered: {
              enum: [true],
            },
          },
          required: ['workSafeBcRegistrationNumber'],
        },
      ],
    },
    sector: {
      oneOf: [
        {
          properties: {
            sector: {
              enum: ['Retail', 'Manufacturing', 'Tourism', 'Artist', 'Agrifoods'],
            },
          },
        },
        {
          properties: {
            sector: {
              enum: ['Other'],
            },
          },
          required: ['sectorOther'],
        },
      ],
    },
    madeInBc: {
      oneOf: [
        {
          properties: {
            madeInBc: { enum: [true] },
          },
        },
        {
          properties: {
            madeInBc: { enum: [false] },
          },
          required: ['productionLocation'],
        },
      ],
    },
    otherCovidFunding: {
      oneOf: [
        {
          properties: {
            otherCovidFunding: { enum: [false] },
          },
        },
        {
          properties: {
            otherCovidFunding: { enum: [true] },
          },
          required: ['otherPrograms'],
        },
      ],
    },
  },
  properties: {
    businessName: {
      type: 'string',
      title: 'Name of Applicant Business',
      name: 'businessName',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    businessWebsite: {
      type: 'string',
      title: 'Website link (if applicable)',
      name: 'businessWebsite',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    primaryContactName: {
      type: 'string',
      title: 'Primary Contact Name',
      name: 'primaryContactName',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    primaryContactPosition: {
      type: 'string',
      title: 'Position/Title',
      name: 'primaryContactPosition',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    businessPhone: {
      type: 'string',
      title: 'Business Phone number',
      name: 'businessPhone',
      pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{4}$',
    },
    email: {
      type: 'string',
      title: 'Email',
      name: 'email',
      inputType: 'email',
      pattern: '(.+)@(.+){2,}.(.+){2,}',
    },
    businessAddress: {
      type: 'string',
      title: 'Business Address',
      name: 'businessAddress',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    // businessLicense was supposed to be a file upload, but we're no longer doing them.
    // Need confirmation on what (if anything) we're using in it's place.
    bcOwned: {
      type: 'boolean',
      title: 'Is the business owned by a B.C. resident or residents?',
      name: 'bcOwned',
    },
    locatedInBc: {
      type: 'boolean',
      title: 'Are the business’s sole or primary operations located in BC?',
      name: 'locatedInBc',
    },
    isCurrentlyOperating: {
      type: 'boolean',
      title: 'Is the business currently operating?',
      name: 'isCurrentlyOperating',
    },
    pstNumber: {
      type: 'string',
      title: 'What is your Provincial Sales Tax (PST) Number? (optional)',
      name: 'pstNumber',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    bcRegistrationID: {
      type: 'string',
      title: 'What is your B.C. Registration ID?',
      name: 'bcRegistrationID',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    federalBusinessNumber: {
      type: 'string',
      title: 'What is your Federal Business Number?',
      name: 'federalBusinessNumber',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    gstNumber: {
      type: 'string',
      title: 'What is your Goods and Services Tax (GST) Number?',
      name: 'gstNumber',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    incomeTaxesFiled: {
      type: 'boolean',
      title: "Have you filed last year's income taxes?",
      name: 'incomeTaxesFiled',
    },
    revenue2019: {
      type: 'string',
      title: 'Last year’s revenue (2019 or the year preceding the application)',
      name: 'revenue2019',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
      pattern: CURRENCY_REGEX,
    },
    // Has a condition
    workSafeBcRegistered: {
      type: 'boolean',
      title: 'Has your business registered with WorkSafeBC?',
      name: 'workSafeBcRegistered',
    },
    workSafeBcRegistrationNumber: {
      type: 'string',
      title: 'What is your WorkSafeBC registration number (if applicable)?',
      name: 'workSafeBcRegistrationNumber',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    // Has a condition
    sector: {
      type: 'string',
      name: 'sector',
      title: 'What is your sector?',
      enum: ['', 'Retail', 'Manufacturing', 'Tourism', 'Artist', 'Agrifoods', 'Other'],
    },
    sectorOther: {
      type: 'string',
      title: 'Please specify',
      name: 'sectorOther',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    region: {
      type: 'string',
      name: 'region',
      title: 'What region does your business operate in?',
      enum: [
        '',
        'Capital Regional District',
        'Metro Vancouver',
        'Vancouver Island (except CRD)',
        'Northeast',
        'North Coast and Nechako',
        'Cariboo',
        'Thompson Okanagan',
        'Kootenay',
        'Southwest (except Metro Van)',
        'North Shore and Sunshine Coast',
      ],
    },
    isIndigenous: {
      type: 'string',
      name: 'isIndigenous',
      title: 'Is this an Indigenous Business?',
      enum: ['', 'Yes', 'No', 'Rather not answer'],
    },
    repeatableProducts: {
      type: 'boolean',
      title: 'Does the business sell products (goods)?',
      name: 'repeatableProducts',
    },
    cannabisProducts: {
      type: 'boolean',
      title: 'Does your business sell Cannabis products?',
      name: 'cannabisProducts',
    },
    // Has a condition
    madeInBc: {
      type: 'boolean',
      title: 'Are your products manufactured and/or produced in BC?',
      name: 'madeInBc',
    },
    productionLocation: {
      type: 'string',
      title: 'If no, please specify where',
      name: 'productionLocation',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    employees: {
      type: 'string',
      name: 'employees',
      title: 'How many employees does the business have on its payroll?',
      enum: ['', 'None', '1-9', '10-49', '50-99', '100-149', '150-199', '200 or more'],
    },
    importExportBusiness: {
      type: 'boolean',
      title: 'Is the business an import/export business?',
      name: 'importExportBusiness',
    },
    onlineStore: {
      type: 'object',
      name: 'onlineStore',
      title: '',
      properties: {
        existingOnlineStore: {
          type: 'boolean',
          title: 'Does the business currently have an online store?',
          name: 'existingOnlineStore',
        },
        onlineStoreUrl: {
          type: 'string',
          title: 'If yes, please provide a link to the online store',
          name: 'onlineStoreUrl',
          minLength: REQUIRED_TEXT_MIN_LENGTH,
          maxLength: TEXT_MAX_LENGTH,
        },
        existingStoreFeatures: {
          type: 'array',
          title: 'If the business has an existing online store, please select all that apply',
          name: 'existingStoreFeatures',
          items: {
            type: 'string',
            enum: [
              'Customer registration and information security features',
              'Shopping cart and order management capabilities',
              'Payment processing options including application of appropriate taxes and shipping costs at time of ordering',
              'Product catalogue, search and inventory status',
              'Website analytics and reporting capabilities',
            ],
          },
          uniqueItems: true,
        },
      },
      required: ['existingOnlineStore'],
      dependencies: {
        existingOnlineStore: {
          oneOf: [
            {
              properties: {
                existingOnlineStore: { enum: [false] },
              },
            },
            {
              properties: {
                existingOnlineStore: { enum: [true] },
              },
              required: ['onlineStoreUrl'],
            },
          ],
        },
      },
    },
    canMeetDeadline: {
      type: 'boolean',
      title:
        'If approved, are you able to utilize the grant funds and complete your online store proposal in twelve weeks?',
      name: 'canMeetDeadline',
    },
    // Has condition
    otherCovidFunding: {
      type: 'boolean',
      title: 'Has your business received funding from other provincial or federal COVID-19 recovery programs?',
      name: 'otherCovidFunding',
    },
    otherPrograms: {
      type: 'string',
      title: 'If yes, please list all programs',
      name: 'otherPrograms',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    // GRANT PROPOSAL SECTION
    planForFunds: {
      type: 'string',
      title: 'Grant Proposal',
      name: 'planForFunds',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },

    costs: {
      type: 'object',
      name: 'costs',
      // Title has to be a string, but we have custom text there so empty.
      title: '',
      properties: {
        serviceProviderCosts: {
          type: 'number',
          title: 'Service Provider(s)',
          name: 'serviceProviderCosts',
          pattern: CURRENCY_REGEX,
        },
        customerAcquisitionCosts: {
          type: 'number',
          title: 'Digital Customer Acquisition',
          name: 'customerAcquisitionCosts',
          pattern: CURRENCY_REGEX,
        },
        staffTrainingCosts: {
          type: 'number',
          title: 'Staff Training Costs',
          name: 'staffTrainingCosts',
          pattern: CURRENCY_REGEX,
        },
      },
    },

    useOfGrant: {
      type: 'boolean',
      name: 'useOfGrant',
      title:
        'I understand that grant funding received through this program must be used to support the development and improvement of online shop of the business this application identifies only.',
    },
    personalInformation: {
      type: 'boolean',
      name: 'personalInformation',
      title:
        'I confirm that I understand that the personal information collected through this application process is collected for the administration of Launch Online Grant including to confirm residency, under s.26(c) of the Freedom of Information and Protection of Privacy Act. I also confirm that I have obtained authorization from the employees to whom the personal information relates to share that information with the Alacrity Canada for the above mentioned purposes. If you have questions about the collection you may contact info@launchonline.ca',
    },
    taxImplications: {
      type: 'boolean',
      name: 'taxImplications',
      title:
        'I understand that the receipt of grants under this program may have implications under Canada’s Income Tax Act, administered by the federal government. I am responsible for obtaining appropriate advice with respect to my obligations under this legislation.',
    },
  },
};

export default schema;
