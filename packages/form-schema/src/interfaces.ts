export interface IDependencies {
  [key: string]: IDependency;
}

export interface IDependency {
  oneOf: ISchema[];
}

export interface ISchema {
  title?: string;
  type?: string;
  required?: string[];
  dependencies?: IDependencies;
  properties: object;
}

export interface IFormPostResponse {
  page: number;
  isValidated: boolean;
  isValid: boolean;
  hasError: boolean;
}
