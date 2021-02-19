export interface IDependencies {
  [key: string]: IDependency;
}

export interface IDependency {
  oneOf: ISchema[];
}

export interface IFileOptions {
  createStream?: Function;
  onFileLoad?: Function;
}

export interface ISchema {
  title?: string;
  type?: string;
  required?: string[];
  dependencies?: IDependencies;
  properties: object;
  hasFiles?: boolean;
}

export interface IFormPostResponse {
  page: number;
  isValidated: boolean;
  isValid: boolean;
  hasError: boolean;
}

export interface IValidations {
  [propertyName: string]: {
    validationFunction: Function;
    errorMessage: string;
  };
}

export interface IOptions {
  defaultLabels?: boolean;
  widgets?: object;
  validations?: IValidations;
  createStream?: Function;
  onFileLoad?: Function;
}

export interface IForms {
  Forms: Function[];
  fieldsArray: string[][];
  schemasArray: object[];
}
