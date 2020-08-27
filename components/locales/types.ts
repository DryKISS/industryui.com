export type ConvertedToFunctionsType<T> = {
  [P in keyof T]: T[P] extends string
    ? () => string
    : ConvertedToFunctionsType<T[P]>;
};
export interface FilterArrayElement {
  disabledCols?: string[];
  hiddenCols?: string[];
  dateCols?: string[];
  countryCols?: string[];
  dropDownCols?: {
    id: string;
    substitudeId?: string;
    options: {
      name: string;
      value: string;
    }[];
  }[];
}
export interface GridTopTab {
  name: string;
  callObject: any;
}
export interface Country {
  code: string;
  fullName: string;
  id: number;
  image: string;
  name: string;
}
