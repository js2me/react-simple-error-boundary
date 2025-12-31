import { Component } from 'react';

export type ErrorComponentType = React.ComponentType<{ error: Error }>;

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  errorComponent?: ErrorComponentType;
  error?: any;
  onCatch?: (error: Error) => void;
}

interface ErrorBoundaryState {
  error?: Error;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {} as ErrorBoundaryState;

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  getSnapshotBeforeUpdate(
    previousProps: Readonly<ErrorBoundaryProps>,
    previousState: Readonly<ErrorBoundaryState>,
  ) {
    if (this.state.error && !previousState.error) {
      this.props.onCatch?.(this.state.error);
    }

    return null;
  }

  render() {
    const error = this.props.error || this.state.error;

    if (error == null) {
      return this.props.children;
    }

    const { errorComponent: ErrorComponent } = this.props;

    return ErrorComponent && <ErrorComponent error={error} />;
  }
}
