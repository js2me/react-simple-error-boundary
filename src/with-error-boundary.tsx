import { ComponentType } from 'react';

import { ErrorBoundary } from './error-boundary';

declare const process: { env: { NODE_ENV?: string } };

export function withErrorBoundary<P extends Record<string, any>>(
  Component: React.ComponentType<P>,
  errorComponent: ComponentType<any>,
) {
  function WithErrorBoudnary(props: P) {
    return (
      <ErrorBoundary errorComponent={errorComponent}>
        <Component {...props} />
      </ErrorBoundary>
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    WithErrorBoudnary.displayName = `withErrorBoundary(${Component.displayName ?? Component.name})`;
  }

  return WithErrorBoudnary;
}
