import { Component, ComponentType, ReactNode } from 'react';

export type ErrorComponent = ComponentType<{ error: Error }>;

export interface ErrorBoundaryProps {
  children: ReactNode;
  errorComponent?: ErrorComponent;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {} as { error?: Error; didCatch?: true };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error != null) {
      const { errorComponent: ErrorComponent } = this.props;

      return ErrorComponent && <ErrorComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}
