import type { ComponentType } from 'react';

import { ErrorBoundary, type ErrorBoundaryProps } from './error-boundary.js';

declare const process: { env: { NODE_ENV?: string } };

export function withErrorBoundary<P extends Record<string, any>>(
  Component: React.ComponentType<P>,
  propsOrErrorComponent:
    | Omit<ErrorBoundaryProps, 'children'>
    | ComponentType<any>,
) {
  const errorBoundaryProps: Omit<ErrorBoundaryProps, 'children'> =
    typeof propsOrErrorComponent === 'function'
      ? {
          errorComponent: propsOrErrorComponent,
        }
      : propsOrErrorComponent;

  function WithErrorBoudnary(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    WithErrorBoudnary.displayName = `withErrorBoundary(${Component.displayName ?? Component.name})`;
  }

  return WithErrorBoudnary;
}
