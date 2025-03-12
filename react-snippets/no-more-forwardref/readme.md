## React 19: Refs Just Got Simpler!

The need for `forwardRef` has been significantly reduced. The React team has made refs more intuitive and easier to work with:

-   **Automatic ref forwarding**: React 19 automatically forwards refs to the underlying DOM elements
-   **No more boilerplate**: You don't need to wrap your components in `forwardRef` to pass refs down
-   **Simplified component code**: Your component definitions can be cleaner and more straightforward

## ESLint Rule for Migrating Away from forwardRef

To help identify and remove unnecessary `forwardRef` usage in your codebase, add the following ESLint rule to your configuration: "@eslint-react/no-forward-ref": "error"

This rule from [eslint-react](https://eslint-react.xyz/docs/rules/no-forward-ref) will:

-   Flag instances where `forwardRef` is used but no longer needed in React 19
-   Suggest replacing `forwardRef` with passing `ref` as a prop
-   Help you modernize your codebase before `forwardRef` is deprecated in a future release

The rule even comes with an **automatic codemod** to help you migrate your codebase!
