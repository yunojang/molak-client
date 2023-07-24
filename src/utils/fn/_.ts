export const _isObj = (v: any) => typeof v === 'object';
export const _keys = (obj: any) => (_isObj(obj) ? Object.keys(obj) : []);

export const _curry = <F extends (...args: any[]) => any>(f: F) => {
  const arity = f.length;

  return (...a: any[]) =>
    a.length >= arity ? f(...a) : (...b: any[]) => f(...a, ...b);
};

export const _curryr = <F extends (...args: any[]) => any>(f: F) => {
  const arity = f.length;

  return (...a: any[]) =>
    a.length >= arity ? f(...a) : (...b: any[]) => f(...b, ...a);
};

// 반복이 아닌 이터러블로 순회하기 (* 제네레이터&이터러블)
export const _each = _curryr(
  <T>(list: Iterable<T>, iter: (v: T) => unknown) => {
    const keys = _keys(list);

    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      iter(list[key]);
    }
  },
);

export const _map = _curryr(<A, B>(list: Iterable<A>, iter: (v: A) => B) => {
  const result: B[] = [];
  _each(list, v => result.push(iter(v)));

  return result;
});

export const _filter = _curryr(
  <A>(list: Iterable<A>, predicate: (v: A) => boolean) => {
    const result: A[] = [];
    _each(list, v => {
      if (predicate(v)) result.push(v);
    });

    return result;
  },
);

export function _reduce<A, B>(
  list: Iterable<A>,
  f: (acc: B, cur: A) => B,
  init?: B,
): unknown {
  if (!init) init = list[0];

  _each(list, v => {
    init = f(init, v);
  });
  return init;
}

export const _pipe =
  <T, F extends (...args: any[]) => any>(...fs: F[]) =>
  (data: T) => {
    return _reduce(fs, (arg, fn) => fn(arg), data);
  };

export const _go = <T, F extends (...args: any[]) => any>(
  data: T,
  ...fs: F[]
) => _reduce(fs, (arg, fn) => fn(arg), data);

export const _indentity = <T>(v: T): T => v;

export const _negaty =
  <F extends (...args: any[]) => any>(f: F) =>
  (...args: any[]) =>
    !f(...args);

export const _get = _curryr(<T>(obj: T, key: keyof T) => obj[key]);

export const _values = <T>(obj: T) => _map(obj, _indentity);

export const _pluck = _curryr(<T>(list: Iterable<T>, key: keyof T) =>
  _map(list, _get(key)),
);

export const _reject = _curryr(
  <T>(list: Iterable<T>, predi: (v: T) => boolean) =>
    _filter(list, _negaty(predi)),
);

export const _compact = _filter(_indentity);

export const _find = _curryr(
  <T>(list: Iterable<T>, predi: (v: T) => unknown) => {
    const keys = _keys(list);
    for (let i = 0, len = keys.length; i < len; i++) {
      const v = list[keys[i]];

      if (predi(v)) return v;
    }
  },
);

export const _find_index = <T>(list: Iterable<T>, predi: (v: T) => unknown) => {
  const keys = _keys(list);
  for (let i = 0, len = keys.length; i < len; i++) {
    const v = list[keys[i]];
    if (predi(v)) return i;
  }

  return -1;
};

export const _some = _curryr(
  <T>(list: Iterable<T>, predi: (v: T) => unknown) =>
    _find_index(list, predi) !== -1,
);

export const _every = _curryr(
  <T>(list: Iterable<T>, predi: (v: T) => unknown) =>
    _find_index(list, _negaty(predi)) === -1,
);

export const _max = <T>(list: Iterable<T>) =>
  _reduce(list, (a, b) => (a > b ? a : b));

export const _max_by = _curryr(
  <T>(list: Iterable<T>, predi: (v: T) => number) =>
    _reduce(list, (a, b) => (predi(a) > predi(b) ? a : b)),
);
