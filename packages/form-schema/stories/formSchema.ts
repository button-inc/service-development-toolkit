const schema = {
  type: 'object',
  properties: {
    organizationProfile: {
      title: 'Organization Profile',
      description: 'Provide an overview of you organization',
      type: 'object',
      properties: {
        organizationName: {
          title: 'Organization name (legal name)',
          type: 'string',
        },
        isLegalPrimaryName: {
          title: 'Is this the primary legal name?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
        isOperatingNameSame: {
          title: 'Is operating name same as legal name?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
        operatingNameIfDifferent: {
          title: 'Operating name (if different)',
          type: 'string',
        },
        typeOfOrganization: {
          title: 'Type of organization',
          type: 'array',
          maxItems: 1,
          items: {
            type: 'string',
            enum: [
              'Incorporated company - private of public',
              'Partnership',
              'Limited partnership',
              'Venture/syndicate',
              'Cooperative',
              'Educational institution - college',
              'Eductational institution - university',
              'Non-profit organization',
              'Municipality',
              'Province',
              'Band Council',
              'Public body owned by local/regional government',
              'Provincial crown corporation',
              'Municipal development corporation',
              'Other', // 'Other' should be an option to select and have a text input adjacent
            ],
          },
          uniqueItems: true,
        },
        bandCouncilNumber: {
          title: 'If band council, please specify the band number',
          type: 'number',
        },
        isIndigenousEntity: {
          title: 'Is this applicant organization an Idigenous entity?',
          type: 'boolean',
          enum: [true, false],
          enumName: ['Yes', 'No'],
        },
        indigenousEntityDesc: {
          title: 'Please provide a short description of the Indigenous entity',
          type: 'string',
        },
        organizationOverview: {
          title:
            'Provide an overview of the organization. Include an overview of its current business model, years in business, experience in operating broadband services, previous federal broadband funding (if applicable), mission/mandate/vision, size of operation (e.g. annual revenue, assets, number of staff), membership (if applicable), current coverage and subscription base (maximum 3,500 characters)',
          type: 'string',
        },
        orgRegistrationDate: {
          title: 'Data of incorporation or registration',
          type: 'string',
        },
        bussinessNumber: {
          title: 'Applicant business number (9-digit business identifier provided by Canada Revenue Agency)',
          type: 'string',
        },
      },
    },
    organizationLocation: {
      title: 'Organization location',
      description: 'Provide an address for your organization',
      type: 'object',
      properties: {
        unitNumber: {
          title: 'Unit number (optional)',
          type: 'string',
        },
        streetNumber: {
          title: 'Street number',
          type: 'string',
        },
        streetName: {
          title: 'Street name',
          type: 'string',
        },
        POBox: {
          title: 'PO box',
          type: 'string',
        },
        city: {
          title: 'City',
          type: 'string',
        },
        province: {
          title: 'Province',
          type: 'string',
        },
        postalCode: {
          title: 'Postal code (H0H 0H0)',
          type: 'string',
        },
        isMailingAddress: {
          title: 'Is the mailing address the same as above?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
        // dependencies: {
        //   isMailingAddress: {
        //     oneOf: [
        //       {
        //         properties: {
        //           type: 'object',
        //           isMailingAddress: {
        //             enum: ['Yes'],
        //           },
        //         },
        //       },
        //       {
        //         properties: {
        //           type: 'object',
        //           isMailingAddress: {
        //             enum: ['No'],
        //           },
        //           unitNumber: {
        //             title: 'Unit number (optional)',
        //             type: 'string',
        //           },
        //           streetNumber: {
        //             title: 'Street number',
        //             type: 'string',
        //           },
        //           streetName: {
        //             title: 'Street name',
        //             type: 'string',
        //           },
        //           POBox: {
        //             title: 'PO box',
        //             type: 'string',
        //           },
        //           city: {
        //             title: 'City',
        //             type: 'string',
        //           },
        //           province: {
        //             title: 'Province',
        //             type: 'string',
        //           },
        //         },
        //       },
        //     ],
        //   },
        // },
      },
    },
    contactInformation: {
      title: 'Organization contact information',
      type: 'object',
      properties: {
        contactTelephoneNumber: {
          title: 'Telephone number',
          type: 'number',
        },
        contactExtension: {
          title: 'Extension',
          type: 'number',
        },
        contactEmail: {
          title: 'Email',
          type: 'string',
        },
        contactWebsite: {
          title: 'Website',
          type: 'string',
        },
      },
    },
    authorizedContact: {
      title: 'Authorized contact',
      description: 'Provide the contact information for the authorized contact',
      type: 'object',
      properties: {
        authFamilyName: {
          title: 'Family name of person who will be the authorized contact',
          type: 'string',
        },
        authGivenName: {
          title: 'Given name of person who will be the authorized contact (optional)',
          type: 'string',
        },
        authPostionTitle: {
          title: 'Position/title',
          type: 'string',
        },
        authEmail: {
          title: 'Email',
          type: 'string',
        },
        authTelephone: {
          title: 'Telephone',
          type: 'number',
        },
        authExtension: {
          title: 'Extension (optional)',
          type: 'number',
        },
        isAuthContactSigningOfficer: {
          title: 'Is this person an authorized signing officer of the applicant?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
      },
    },
    alternateContact: {
      title: 'Alternate contact',
      description: 'Provide the contact information for the alternate contact',
      type: 'object',
      properties: {
        altFamilyName: {
          title: 'Family name of person who will be the alternate contact',
          type: 'string',
        },
        altGivenName: {
          title: 'Given name of person who will be the alternate contact',
          type: 'string',
        },
        altPostionTitle: {
          title: 'Position/title',
          type: 'string',
        },
        altEmail: {
          title: 'Email',
          type: 'string',
        },
        altTelephone: {
          title: 'Telephone',
          type: 'number',
        },
        altExtension: {
          title: 'Extension (optional)',
          type: 'number',
        },
        isAltContactSigningOfficer: {
          title: 'Is this person an authorized signing officer of the applicant?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
      },
    },
    existingNetworkCoverage: {
      title: 'Existing network coverage',
      type: 'object',
      properties: {
        hasProvidedExitingNetworkCoverage: {
          title:
            'Please indicate if you have already provided your existing network and/or coverage information to ISED or the Canadian Radio-television and Telecommunications Commission (CRTC) in the past 12 months, or if you will submit such information to ISED before the close of applications. For more information on how to submit existing network and coverage information, refer to the Universal Broadband Fund (UBF) website.',
          type: 'array',
          maxItems: 1,
          items: {
            type: 'string',
            enum: [
              'I have provided existing network information and/or coverage to ISED or the CRTC in the past 12 months',
              'I will provide existing network information and/or coverage to ISED by the application deadline',
              'I do not currently have existing coverage',
            ],
          },
          uniqueItems: true,
        },
        hasPassiveInfrastructure: {
          title:
            'Does the applicant own passive infrastructure (including, for example, towers, poles, rights of way or other similar assets and infrastructure)?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
        isInfrastuctureAvailable: {
          title:
            'The applicant intends to make reasonable efforts to make its passive infrastructure available for use by other broadband operators to expand and improve coverage in Canada?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
        requiresThirdPartyInfrastructureAccess: {
          title:
            'Does the applicant’s project require access to third party passive infrastructure (including for example, towers, poles, rights of way or other similar assets and infrastructure)?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
      },
    },
    projectInformation: {
      title: 'Project information',
      description:
        'PLEASE NOTE: If the project is approved, the project information herein may be used, in whole or in part, in publicly accessible websites, media releases, or other similar material.',
      type: 'object',
      properties: {
        projectSpanMultipleLocations: {
          title: 'Does your project span multiple provinces/territories?',
          type: 'boolean',
          enum: [true, false],
          enumNames: ['Yes', 'No'],
        },
        projectLocations: {
          title: 'If yes, province or territory location (check all that apply)',
          type: 'array',
          items: {
            type: 'string',
            enum: ['Alberta', 'British Columbia', 'Northwest Territories', 'Yukon'],
          },
          uniqueItems: true,
        },
      },
    },
    additionalProjectInformation: {
      title: 'Project information',
      type: 'object',
      properties: {
        projectTitle: {
          title: 'Project title',
          type: 'string',
        },
        geographicAreaDescription: {
          title: 'Geographic project area description',
          type: 'string',
        },
        projectDescription: {
          title:
            'Using non-technical language, provide a description of the project, its key elements, objectives, and benefits',
          type: 'string',
        },
      },
    },
  },
};

export default schema;
