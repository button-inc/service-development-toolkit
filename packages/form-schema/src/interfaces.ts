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
