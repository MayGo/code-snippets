/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as UseHookPromisesIndexImport } from './routes/use-hook-promises/index'
import { Route as OptimisticDemoIndexImport } from './routes/optimistic-demo/index'
import { Route as FormActionsIndexImport } from './routes/form-actions/index'
import { Route as AsyncUseTransitionIndexImport } from './routes/async-use-transition/index'
import { Route as UseHookPromisesBeforeImport } from './routes/use-hook-promises/before'
import { Route as UseHookPromisesAfterImport } from './routes/use-hook-promises/after'
import { Route as OptimisticDemoBeforeImport } from './routes/optimistic-demo/before'
import { Route as OptimisticDemoAfterImport } from './routes/optimistic-demo/after'
import { Route as FormActionsBeforeImport } from './routes/form-actions/before'
import { Route as FormActionsAfterImport } from './routes/form-actions/after'
import { Route as AsyncUseTransitionTabsIndexImport } from './routes/async-use-transition/tabs/index'
import { Route as AsyncUseTransitionAnalyticsIndexImport } from './routes/async-use-transition/analytics/index'
import { Route as AsyncUseTransitionTabsBeforeImport } from './routes/async-use-transition/tabs/before'
import { Route as AsyncUseTransitionTabsAfterImport } from './routes/async-use-transition/tabs/after'
import { Route as AsyncUseTransitionAnalyticsBeforeImport } from './routes/async-use-transition/analytics/before'
import { Route as AsyncUseTransitionAnalyticsAfterImport } from './routes/async-use-transition/analytics/after'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UseHookPromisesIndexRoute = UseHookPromisesIndexImport.update({
  id: '/use-hook-promises/',
  path: '/use-hook-promises/',
  getParentRoute: () => rootRoute,
} as any)

const OptimisticDemoIndexRoute = OptimisticDemoIndexImport.update({
  id: '/optimistic-demo/',
  path: '/optimistic-demo/',
  getParentRoute: () => rootRoute,
} as any)

const FormActionsIndexRoute = FormActionsIndexImport.update({
  id: '/form-actions/',
  path: '/form-actions/',
  getParentRoute: () => rootRoute,
} as any)

const AsyncUseTransitionIndexRoute = AsyncUseTransitionIndexImport.update({
  id: '/async-use-transition/',
  path: '/async-use-transition/',
  getParentRoute: () => rootRoute,
} as any)

const UseHookPromisesBeforeRoute = UseHookPromisesBeforeImport.update({
  id: '/use-hook-promises/before',
  path: '/use-hook-promises/before',
  getParentRoute: () => rootRoute,
} as any)

const UseHookPromisesAfterRoute = UseHookPromisesAfterImport.update({
  id: '/use-hook-promises/after',
  path: '/use-hook-promises/after',
  getParentRoute: () => rootRoute,
} as any)

const OptimisticDemoBeforeRoute = OptimisticDemoBeforeImport.update({
  id: '/optimistic-demo/before',
  path: '/optimistic-demo/before',
  getParentRoute: () => rootRoute,
} as any)

const OptimisticDemoAfterRoute = OptimisticDemoAfterImport.update({
  id: '/optimistic-demo/after',
  path: '/optimistic-demo/after',
  getParentRoute: () => rootRoute,
} as any)

const FormActionsBeforeRoute = FormActionsBeforeImport.update({
  id: '/form-actions/before',
  path: '/form-actions/before',
  getParentRoute: () => rootRoute,
} as any)

const FormActionsAfterRoute = FormActionsAfterImport.update({
  id: '/form-actions/after',
  path: '/form-actions/after',
  getParentRoute: () => rootRoute,
} as any)

const AsyncUseTransitionTabsIndexRoute =
  AsyncUseTransitionTabsIndexImport.update({
    id: '/async-use-transition/tabs/',
    path: '/async-use-transition/tabs/',
    getParentRoute: () => rootRoute,
  } as any)

const AsyncUseTransitionAnalyticsIndexRoute =
  AsyncUseTransitionAnalyticsIndexImport.update({
    id: '/async-use-transition/analytics/',
    path: '/async-use-transition/analytics/',
    getParentRoute: () => rootRoute,
  } as any)

const AsyncUseTransitionTabsBeforeRoute =
  AsyncUseTransitionTabsBeforeImport.update({
    id: '/async-use-transition/tabs/before',
    path: '/async-use-transition/tabs/before',
    getParentRoute: () => rootRoute,
  } as any)

const AsyncUseTransitionTabsAfterRoute =
  AsyncUseTransitionTabsAfterImport.update({
    id: '/async-use-transition/tabs/after',
    path: '/async-use-transition/tabs/after',
    getParentRoute: () => rootRoute,
  } as any)

const AsyncUseTransitionAnalyticsBeforeRoute =
  AsyncUseTransitionAnalyticsBeforeImport.update({
    id: '/async-use-transition/analytics/before',
    path: '/async-use-transition/analytics/before',
    getParentRoute: () => rootRoute,
  } as any)

const AsyncUseTransitionAnalyticsAfterRoute =
  AsyncUseTransitionAnalyticsAfterImport.update({
    id: '/async-use-transition/analytics/after',
    path: '/async-use-transition/analytics/after',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/form-actions/after': {
      id: '/form-actions/after'
      path: '/form-actions/after'
      fullPath: '/form-actions/after'
      preLoaderRoute: typeof FormActionsAfterImport
      parentRoute: typeof rootRoute
    }
    '/form-actions/before': {
      id: '/form-actions/before'
      path: '/form-actions/before'
      fullPath: '/form-actions/before'
      preLoaderRoute: typeof FormActionsBeforeImport
      parentRoute: typeof rootRoute
    }
    '/optimistic-demo/after': {
      id: '/optimistic-demo/after'
      path: '/optimistic-demo/after'
      fullPath: '/optimistic-demo/after'
      preLoaderRoute: typeof OptimisticDemoAfterImport
      parentRoute: typeof rootRoute
    }
    '/optimistic-demo/before': {
      id: '/optimistic-demo/before'
      path: '/optimistic-demo/before'
      fullPath: '/optimistic-demo/before'
      preLoaderRoute: typeof OptimisticDemoBeforeImport
      parentRoute: typeof rootRoute
    }
    '/use-hook-promises/after': {
      id: '/use-hook-promises/after'
      path: '/use-hook-promises/after'
      fullPath: '/use-hook-promises/after'
      preLoaderRoute: typeof UseHookPromisesAfterImport
      parentRoute: typeof rootRoute
    }
    '/use-hook-promises/before': {
      id: '/use-hook-promises/before'
      path: '/use-hook-promises/before'
      fullPath: '/use-hook-promises/before'
      preLoaderRoute: typeof UseHookPromisesBeforeImport
      parentRoute: typeof rootRoute
    }
    '/async-use-transition/': {
      id: '/async-use-transition/'
      path: '/async-use-transition'
      fullPath: '/async-use-transition'
      preLoaderRoute: typeof AsyncUseTransitionIndexImport
      parentRoute: typeof rootRoute
    }
    '/form-actions/': {
      id: '/form-actions/'
      path: '/form-actions'
      fullPath: '/form-actions'
      preLoaderRoute: typeof FormActionsIndexImport
      parentRoute: typeof rootRoute
    }
    '/optimistic-demo/': {
      id: '/optimistic-demo/'
      path: '/optimistic-demo'
      fullPath: '/optimistic-demo'
      preLoaderRoute: typeof OptimisticDemoIndexImport
      parentRoute: typeof rootRoute
    }
    '/use-hook-promises/': {
      id: '/use-hook-promises/'
      path: '/use-hook-promises'
      fullPath: '/use-hook-promises'
      preLoaderRoute: typeof UseHookPromisesIndexImport
      parentRoute: typeof rootRoute
    }
    '/async-use-transition/analytics/after': {
      id: '/async-use-transition/analytics/after'
      path: '/async-use-transition/analytics/after'
      fullPath: '/async-use-transition/analytics/after'
      preLoaderRoute: typeof AsyncUseTransitionAnalyticsAfterImport
      parentRoute: typeof rootRoute
    }
    '/async-use-transition/analytics/before': {
      id: '/async-use-transition/analytics/before'
      path: '/async-use-transition/analytics/before'
      fullPath: '/async-use-transition/analytics/before'
      preLoaderRoute: typeof AsyncUseTransitionAnalyticsBeforeImport
      parentRoute: typeof rootRoute
    }
    '/async-use-transition/tabs/after': {
      id: '/async-use-transition/tabs/after'
      path: '/async-use-transition/tabs/after'
      fullPath: '/async-use-transition/tabs/after'
      preLoaderRoute: typeof AsyncUseTransitionTabsAfterImport
      parentRoute: typeof rootRoute
    }
    '/async-use-transition/tabs/before': {
      id: '/async-use-transition/tabs/before'
      path: '/async-use-transition/tabs/before'
      fullPath: '/async-use-transition/tabs/before'
      preLoaderRoute: typeof AsyncUseTransitionTabsBeforeImport
      parentRoute: typeof rootRoute
    }
    '/async-use-transition/analytics/': {
      id: '/async-use-transition/analytics/'
      path: '/async-use-transition/analytics'
      fullPath: '/async-use-transition/analytics'
      preLoaderRoute: typeof AsyncUseTransitionAnalyticsIndexImport
      parentRoute: typeof rootRoute
    }
    '/async-use-transition/tabs/': {
      id: '/async-use-transition/tabs/'
      path: '/async-use-transition/tabs'
      fullPath: '/async-use-transition/tabs'
      preLoaderRoute: typeof AsyncUseTransitionTabsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/form-actions/after': typeof FormActionsAfterRoute
  '/form-actions/before': typeof FormActionsBeforeRoute
  '/optimistic-demo/after': typeof OptimisticDemoAfterRoute
  '/optimistic-demo/before': typeof OptimisticDemoBeforeRoute
  '/use-hook-promises/after': typeof UseHookPromisesAfterRoute
  '/use-hook-promises/before': typeof UseHookPromisesBeforeRoute
  '/async-use-transition': typeof AsyncUseTransitionIndexRoute
  '/form-actions': typeof FormActionsIndexRoute
  '/optimistic-demo': typeof OptimisticDemoIndexRoute
  '/use-hook-promises': typeof UseHookPromisesIndexRoute
  '/async-use-transition/analytics/after': typeof AsyncUseTransitionAnalyticsAfterRoute
  '/async-use-transition/analytics/before': typeof AsyncUseTransitionAnalyticsBeforeRoute
  '/async-use-transition/tabs/after': typeof AsyncUseTransitionTabsAfterRoute
  '/async-use-transition/tabs/before': typeof AsyncUseTransitionTabsBeforeRoute
  '/async-use-transition/analytics': typeof AsyncUseTransitionAnalyticsIndexRoute
  '/async-use-transition/tabs': typeof AsyncUseTransitionTabsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/form-actions/after': typeof FormActionsAfterRoute
  '/form-actions/before': typeof FormActionsBeforeRoute
  '/optimistic-demo/after': typeof OptimisticDemoAfterRoute
  '/optimistic-demo/before': typeof OptimisticDemoBeforeRoute
  '/use-hook-promises/after': typeof UseHookPromisesAfterRoute
  '/use-hook-promises/before': typeof UseHookPromisesBeforeRoute
  '/async-use-transition': typeof AsyncUseTransitionIndexRoute
  '/form-actions': typeof FormActionsIndexRoute
  '/optimistic-demo': typeof OptimisticDemoIndexRoute
  '/use-hook-promises': typeof UseHookPromisesIndexRoute
  '/async-use-transition/analytics/after': typeof AsyncUseTransitionAnalyticsAfterRoute
  '/async-use-transition/analytics/before': typeof AsyncUseTransitionAnalyticsBeforeRoute
  '/async-use-transition/tabs/after': typeof AsyncUseTransitionTabsAfterRoute
  '/async-use-transition/tabs/before': typeof AsyncUseTransitionTabsBeforeRoute
  '/async-use-transition/analytics': typeof AsyncUseTransitionAnalyticsIndexRoute
  '/async-use-transition/tabs': typeof AsyncUseTransitionTabsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/form-actions/after': typeof FormActionsAfterRoute
  '/form-actions/before': typeof FormActionsBeforeRoute
  '/optimistic-demo/after': typeof OptimisticDemoAfterRoute
  '/optimistic-demo/before': typeof OptimisticDemoBeforeRoute
  '/use-hook-promises/after': typeof UseHookPromisesAfterRoute
  '/use-hook-promises/before': typeof UseHookPromisesBeforeRoute
  '/async-use-transition/': typeof AsyncUseTransitionIndexRoute
  '/form-actions/': typeof FormActionsIndexRoute
  '/optimistic-demo/': typeof OptimisticDemoIndexRoute
  '/use-hook-promises/': typeof UseHookPromisesIndexRoute
  '/async-use-transition/analytics/after': typeof AsyncUseTransitionAnalyticsAfterRoute
  '/async-use-transition/analytics/before': typeof AsyncUseTransitionAnalyticsBeforeRoute
  '/async-use-transition/tabs/after': typeof AsyncUseTransitionTabsAfterRoute
  '/async-use-transition/tabs/before': typeof AsyncUseTransitionTabsBeforeRoute
  '/async-use-transition/analytics/': typeof AsyncUseTransitionAnalyticsIndexRoute
  '/async-use-transition/tabs/': typeof AsyncUseTransitionTabsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/form-actions/after'
    | '/form-actions/before'
    | '/optimistic-demo/after'
    | '/optimistic-demo/before'
    | '/use-hook-promises/after'
    | '/use-hook-promises/before'
    | '/async-use-transition'
    | '/form-actions'
    | '/optimistic-demo'
    | '/use-hook-promises'
    | '/async-use-transition/analytics/after'
    | '/async-use-transition/analytics/before'
    | '/async-use-transition/tabs/after'
    | '/async-use-transition/tabs/before'
    | '/async-use-transition/analytics'
    | '/async-use-transition/tabs'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/form-actions/after'
    | '/form-actions/before'
    | '/optimistic-demo/after'
    | '/optimistic-demo/before'
    | '/use-hook-promises/after'
    | '/use-hook-promises/before'
    | '/async-use-transition'
    | '/form-actions'
    | '/optimistic-demo'
    | '/use-hook-promises'
    | '/async-use-transition/analytics/after'
    | '/async-use-transition/analytics/before'
    | '/async-use-transition/tabs/after'
    | '/async-use-transition/tabs/before'
    | '/async-use-transition/analytics'
    | '/async-use-transition/tabs'
  id:
    | '__root__'
    | '/'
    | '/form-actions/after'
    | '/form-actions/before'
    | '/optimistic-demo/after'
    | '/optimistic-demo/before'
    | '/use-hook-promises/after'
    | '/use-hook-promises/before'
    | '/async-use-transition/'
    | '/form-actions/'
    | '/optimistic-demo/'
    | '/use-hook-promises/'
    | '/async-use-transition/analytics/after'
    | '/async-use-transition/analytics/before'
    | '/async-use-transition/tabs/after'
    | '/async-use-transition/tabs/before'
    | '/async-use-transition/analytics/'
    | '/async-use-transition/tabs/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  FormActionsAfterRoute: typeof FormActionsAfterRoute
  FormActionsBeforeRoute: typeof FormActionsBeforeRoute
  OptimisticDemoAfterRoute: typeof OptimisticDemoAfterRoute
  OptimisticDemoBeforeRoute: typeof OptimisticDemoBeforeRoute
  UseHookPromisesAfterRoute: typeof UseHookPromisesAfterRoute
  UseHookPromisesBeforeRoute: typeof UseHookPromisesBeforeRoute
  AsyncUseTransitionIndexRoute: typeof AsyncUseTransitionIndexRoute
  FormActionsIndexRoute: typeof FormActionsIndexRoute
  OptimisticDemoIndexRoute: typeof OptimisticDemoIndexRoute
  UseHookPromisesIndexRoute: typeof UseHookPromisesIndexRoute
  AsyncUseTransitionAnalyticsAfterRoute: typeof AsyncUseTransitionAnalyticsAfterRoute
  AsyncUseTransitionAnalyticsBeforeRoute: typeof AsyncUseTransitionAnalyticsBeforeRoute
  AsyncUseTransitionTabsAfterRoute: typeof AsyncUseTransitionTabsAfterRoute
  AsyncUseTransitionTabsBeforeRoute: typeof AsyncUseTransitionTabsBeforeRoute
  AsyncUseTransitionAnalyticsIndexRoute: typeof AsyncUseTransitionAnalyticsIndexRoute
  AsyncUseTransitionTabsIndexRoute: typeof AsyncUseTransitionTabsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FormActionsAfterRoute: FormActionsAfterRoute,
  FormActionsBeforeRoute: FormActionsBeforeRoute,
  OptimisticDemoAfterRoute: OptimisticDemoAfterRoute,
  OptimisticDemoBeforeRoute: OptimisticDemoBeforeRoute,
  UseHookPromisesAfterRoute: UseHookPromisesAfterRoute,
  UseHookPromisesBeforeRoute: UseHookPromisesBeforeRoute,
  AsyncUseTransitionIndexRoute: AsyncUseTransitionIndexRoute,
  FormActionsIndexRoute: FormActionsIndexRoute,
  OptimisticDemoIndexRoute: OptimisticDemoIndexRoute,
  UseHookPromisesIndexRoute: UseHookPromisesIndexRoute,
  AsyncUseTransitionAnalyticsAfterRoute: AsyncUseTransitionAnalyticsAfterRoute,
  AsyncUseTransitionAnalyticsBeforeRoute:
    AsyncUseTransitionAnalyticsBeforeRoute,
  AsyncUseTransitionTabsAfterRoute: AsyncUseTransitionTabsAfterRoute,
  AsyncUseTransitionTabsBeforeRoute: AsyncUseTransitionTabsBeforeRoute,
  AsyncUseTransitionAnalyticsIndexRoute: AsyncUseTransitionAnalyticsIndexRoute,
  AsyncUseTransitionTabsIndexRoute: AsyncUseTransitionTabsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/form-actions/after",
        "/form-actions/before",
        "/optimistic-demo/after",
        "/optimistic-demo/before",
        "/use-hook-promises/after",
        "/use-hook-promises/before",
        "/async-use-transition/",
        "/form-actions/",
        "/optimistic-demo/",
        "/use-hook-promises/",
        "/async-use-transition/analytics/after",
        "/async-use-transition/analytics/before",
        "/async-use-transition/tabs/after",
        "/async-use-transition/tabs/before",
        "/async-use-transition/analytics/",
        "/async-use-transition/tabs/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/form-actions/after": {
      "filePath": "form-actions/after.tsx"
    },
    "/form-actions/before": {
      "filePath": "form-actions/before.tsx"
    },
    "/optimistic-demo/after": {
      "filePath": "optimistic-demo/after.tsx"
    },
    "/optimistic-demo/before": {
      "filePath": "optimistic-demo/before.tsx"
    },
    "/use-hook-promises/after": {
      "filePath": "use-hook-promises/after.tsx"
    },
    "/use-hook-promises/before": {
      "filePath": "use-hook-promises/before.tsx"
    },
    "/async-use-transition/": {
      "filePath": "async-use-transition/index.tsx"
    },
    "/form-actions/": {
      "filePath": "form-actions/index.tsx"
    },
    "/optimistic-demo/": {
      "filePath": "optimistic-demo/index.tsx"
    },
    "/use-hook-promises/": {
      "filePath": "use-hook-promises/index.tsx"
    },
    "/async-use-transition/analytics/after": {
      "filePath": "async-use-transition/analytics/after.tsx"
    },
    "/async-use-transition/analytics/before": {
      "filePath": "async-use-transition/analytics/before.tsx"
    },
    "/async-use-transition/tabs/after": {
      "filePath": "async-use-transition/tabs/after.tsx"
    },
    "/async-use-transition/tabs/before": {
      "filePath": "async-use-transition/tabs/before.tsx"
    },
    "/async-use-transition/analytics/": {
      "filePath": "async-use-transition/analytics/index.tsx"
    },
    "/async-use-transition/tabs/": {
      "filePath": "async-use-transition/tabs/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
