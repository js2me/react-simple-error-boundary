import { Component, ComponentType, ReactNode } from 'react';

export type ErrorComponentType = ComponentType<{ error: Error }>;

export interface ErrorBoundaryProps {
  children: ReactNode;
  errorComponent?: ErrorComponentType;
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
