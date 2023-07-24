interface Lengthy {
  length: number;
}

interface Validatable<T = any> {
  value?: T;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  contains?: string;
  validFn?(value?: T): boolean;
}

class Validation<T = any> {
  value?: T;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  contains?: string;
  validFn?(value?: T): boolean;

  constructor(validatableInput: Validatable<T>) {
    const {
      value,
      required,
      maxLength,
      minLength,
      max,
      min,
      contains,
      validFn,
    } = validatableInput;

    this.value = value;
    this.required = required;
    this.minLength = minLength;
    this.maxLength = maxLength;
    this.min = min;
    this.max = max;
    this.contains = contains;
    this.validFn = validFn;
  }

  public validate(value?: T) {
    const v = value ?? this.value;

    let isValid = true;

    if (this.required) {
      isValid &&= !!v;
    }
    const checkValid = (!this.required && v) || this.required;

    if (!checkValid) {
      return true;
    }

    if (typeof v === 'string') {
      if (typeof this.contains !== 'undefined') {
        isValid &&= v.includes(this.contains);
      }
    }

    if (Validation.isLengthy(v)) {
      if (typeof this.maxLength !== 'undefined') {
        isValid &&= v.length <= this.maxLength;
      }

      if (typeof this.minLength !== 'undefined') {
        isValid &&= v.length >= this.minLength;
      }
    }

    if (Validation.isNumeric(v)) {
      const numericValue = +v;

      if (typeof this.max !== 'undefined') {
        isValid &&= numericValue <= this.max;
      }

      if (typeof this.min !== 'undefined') {
        isValid &&= numericValue >= this.min;
      }
    }

    if (v && typeof this.validFn === 'function') {
      isValid &&= this.validFn(v);
    }

    return isValid;
  }

  map(fn: (v: T | undefined) => any) {
    return Validation.of({ ...this, value: fn(this.value) });
  }

  static of(validatable: Validatable = {}) {
    return new Validation(validatable);
  }

  static isLengthy = (value: any): value is Lengthy => {
    return typeof value?.length === 'number';
  };

  static isNumeric = (value: any): value is number | string | boolean => {
    return typeof value === 'number' || !isNaN(+value);
  };
}

export default Validation;
