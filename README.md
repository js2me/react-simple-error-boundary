# React Simple Error Boundary  

This is simple ErrorBoundary component    

## Usage with Component  

```tsx
import { ErrorBoundary } from "react-simple-error-boundary";

<ErrorBoundary
  errorComponent={YourErrorComponentHandler}
  onCatch={e => {
    /* do something */
  }}
>
  <PageOrComponent/>
</ErrorBoundary>
```

## Usage with HOC   

```tsx
import { withErrorBoundary } from "react-simple-error-boundary";

const WrappedPageOrComponent = withErrorBoundary(PageOrComponent, YourErrorComponentHandler);
```