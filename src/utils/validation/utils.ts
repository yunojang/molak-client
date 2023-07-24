import Validation from '.';

export const validate = <T extends object>(
  values: T,
  scheme: {
    [key in keyof Partial<T>]: { validation: Validation; message?: string };
  },
) => {
  let isValid = true;
  let message = '';
  const error: { [key in keyof T]?: string } = {};

  for (const _key of Object.keys(scheme)) {
    const key = _key as keyof T;
    const obj = scheme[key];

    if (!obj.validation.validate(values[key])) {
      isValid &&= false;

      const msg = obj.message ?? '올바른 값을 넣어야합니다.';
      error[key] = msg;
      if (!message) {
        message = msg;
      }
    }
  }

  return { isValid, message, error };
};
