# Domain Registration and Web Hosting Platform (Frontend)

## Folder Structure

The project follows a feature-based architecture for better scalability and maintainability.

```
src/
│
├── app/                  # Next.js App Router pages
│   ├── auth/             # Authentication routes
│   ├── domains/          # Domain management routes
│   ├── hosting/          # Hosting plans routes
│   ├── dashboard/        # User dashboard routes
│   ├── cart/             # Shopping cart routes
│   ├── support/          # Support and knowledge base routes
│   └── ...
│
├── features/             # Feature-based modules
│   ├── auth/             # Authentication feature
│   │   ├── components/   # UI components specific to auth
│   │   ├── hooks/        # Custom hooks for auth
│   │   ├── services/     # Auth API services
│   │   ├── types/        # TypeScript types for auth
│   │   └── utils/        # Utility functions for auth
│   │
│   ├── domains/          # Domain registration and management
│   ├── hosting/          # Web hosting plans and management
│   ├── dashboard/        # User dashboard
│   ├── cart/             # Shopping cart and checkout
│   ├── addons/           # Add-on services
│   └── support/          # Support system
│
├── components/           # Reusable UI components
│   └── ui/               # Base UI components
│
├── hooks/                # Shared custom hooks
├── services/             # Common API services
├── types/                # Shared TypeScript types
├── utils/                # Utility functions
├── config/               # Configuration files
├── constants/            # Constants and enums
├── providers/            # React context providers
├── mocks/                # Mock Service Worker handlers
│
└── middleware.ts         # Next.js middleware
```

## Best Practices

1. **Feature Encapsulation**: Each feature should be self-contained with its own components, hooks, services, and types.
2. **Code Reusability**: Shared components and utilities should be placed in their respective directories at the root level.
3. **Barrel Exports**: Use index.ts files to export from directories for cleaner imports.
4. **Type Safety**: Use TypeScript types for all components and functions.
5. **API Mocking**: Use MSW for simulating backend APIs.
6. **State Management**: Use Zustand for global state management.
7. **Theme Consistency**: Use the primary color #7521a4 (RGB 117, 33, 164) throughout the UI.

## Development Guidelines

- Keep features isolated to ensure modularity and maintainability
- Follow the established folder structure for new features
- Use the shared components and utilities whenever possible
- Implement proper error handling and loading states
- Write unit tests for components and hooks
- Follow the established naming conventions 