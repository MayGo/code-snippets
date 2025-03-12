# No more forwardRef

This example demonstrates modern React patterns that can help you avoid using `forwardRef` in many common scenarios.

The examples show different approaches to handle component interactions without explicitly passing refs through component boundaries:

1. **Traditional forwardRef approach** - The conventional way of passing refs through components
2. **Modern hook-based approaches** - Using hooks like `useImperativeHandle` and composition
3. **State management patterns** - Leveraging state management and context for communication between components

## Examples

Each example is provided in "before" and "after" versions:

-   `before.jsx` - Shows the traditional approach using forwardRef
-   `after.jsx` - Shows the modern approach avoiding forwardRef

## Key takeaways

-   Use composition and props when possible
-   Leverage React's built-in hooks for imperative actions
-   Consider state management for complex component interactions
-   Use the Context API for deeply nested component communication
-   Only reach for forwardRef when absolutely necessary (e.g., for library components)
