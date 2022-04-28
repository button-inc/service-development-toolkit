const uiSchema = {
  isLegalPrimaryName: {
    'ui:widget': 'radio',
  },
  isOperatingNameSame: {
    'ui:widget': 'radio',
  },
  typeOfOrganization: {
    'ui:widget': 'checkboxes',
  },
  isIndigenousEntity: {
    'ui:widget': 'radio',
  },
  organizationOverview: {
    'ui:widget': 'textarea',
  },
  isMailingAddress: {
    'ui:widget': 'radio',
  },
  isAuthContactSigningOfficer: {
    'ui:widget': 'radio',
  },
  isAltContactSigningOfficer: {
    'ui:widget': 'radio',
  },
  hasProvidedExitingNetworkCoverage: {
    'ui:widget': 'checkboxes',
  },
  hasPassiveInfrastructure: {
    'ui:widget': 'radio',
  },
  isInfrastuctureAvailable: {
    'ui:widget': 'radio',
  },
  requiresThirdPartyInfrastructureAccess: {
    'ui:widget': 'radio',
  },
  projectSpanMultipleLocations: {
    'ui:widget': 'radio',
  },
  projectLocations: {
    'ui:widget': 'checkboxes',
  },
  projectDescription: {
    'ui:widget': 'textarea',
  },
};

export default uiSchema;
