import React, { useState, ReactElement, useEffect } from 'react';

interface Validatable {
  value?: any;
  validate(v: any): boolean;
}

type ErrorObject<T> = {
  [key in keyof T]?: string;
};

export type ValidationObject<Scheme> = {
  [key in keyof Scheme]?: { validation: Validatable; message: string };
};

export type ValuesType = {
  [key: string]: any;
};

interface FormInfo<V extends ValuesType> {
  // isError: boolean;
  error: ErrorObject<V>;
  values: Partial<V>;
}

export interface FormProps<S extends ValuesType> {
  reset?: boolean;
  stopPropagation?: boolean;
  defaultValues?: Partial<S>;
  children?(info: FormInfo<S>): ReactElement;
  onChange?(
    values: Partial<S>,
    info: FormInfo<S>,
    changed: { [key: string]: string },
  ): void;
  onSubmit?(values: Partial<S>): void;
  onSubmitFailed?(info: FormInfo<S>): void;
  validation?: ValidationObject<S>;
  preventEnter?: boolean;
}

export function Form<S extends ValuesType>({
  reset,
  stopPropagation,
  children = () => <></>,
  validation = {},
  defaultValues = {},
  onChange = () => {},
  onSubmit = () => {},
  onSubmitFailed = () => {},
  preventEnter,
}: FormProps<S>) {
  const [info, setInfo] = useState<FormInfo<S>>({
    error: {},
    values: defaultValues,
  });
  const [values, setValues] = useState<Partial<S>>(defaultValues);

  useEffect(() => {
    if (reset) {
      setValues(defaultValues);
      setInfo({ error: {}, values: defaultValues });
    }
  }, [reset, defaultValues]);

  const removeErrorByKey = (key: keyof S) => {
    setInfo(old => ({ ...old, error: { ...old.error, [key]: '' } }));
  };

  return (
    <form
      onKeyDown={e => {
        if (e.key === 'Enter' && preventEnter) {
          e.preventDefault();
        }
      }}
      onChange={e => {
        if (stopPropagation) {
          e.stopPropagation();
        }

        const { name, value } = e.target as HTMLInputElement;
        const newValues = { ...values, [name]: value };
        const updated = { [name]: value };

        onChange(newValues, info, updated);
        setValues(newValues);
        setInfo(old => ({ ...old, values: newValues }));

        const key = validation[name as keyof S] ? (name as keyof S) : undefined;

        if (key && validation[key]) {
          removeErrorByKey(key);
        }
      }}
      onSubmit={e => {
        e.preventDefault();

        let isInvalid = false;
        const newInfo = { ...info };

        for (const key in validation) {
          if (
            validation[key] &&
            !validation[key]?.validation.validate(values[key])
          ) {
            newInfo.error[key] = validation[key]?.message; // temp message 'invalid'
            isInvalid = true;
          } else newInfo.error[key] = '';
        }

        setInfo(newInfo);
        if (!isInvalid) {
          onSubmit(values);
        } else {
          onSubmitFailed(info);
        }
      }}
    >
      {children(info)}
    </form>
  );
}
