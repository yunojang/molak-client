export interface Formable<T = any> {
  itmesFilter?(key: string): boolean;
  onChange?(v: Partial<T>): void;
}

export interface ValidationError {
  key: string;
  value: any;
  message?: string;
}
