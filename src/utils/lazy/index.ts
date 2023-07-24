import React, { lazy } from 'react';
import { hasRefreshed, onPass, onRefresh } from './storage';

interface ComponentModule {
  default: React.ComponentType<any>;
}
type ImportComponent = () => Promise<ComponentModule>;

export const lazyRetry = (
  componentImport: ImportComponent,
  name?: string,
): Promise<ComponentModule> =>
  new Promise((resolve, reject) => {
    componentImport()
      .then(comp => {
        onPass(name);
        resolve(comp);
      })
      .catch(err => {
        if (!hasRefreshed(name)) {
          onRefresh(name);
          return window.location.reload();
        }

        reject(err);
      });
  });

export const _lazy = (componentImport: ImportComponent, name?: string) =>
  lazy(() => lazyRetry(componentImport, name));
