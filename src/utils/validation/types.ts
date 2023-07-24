import Validation from '.';

export type RequestValidation<T> = {
  [key in keyof Partial<T>]: {
    validation: Validation;
    message?: string;
  };
};
