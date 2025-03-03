# Quick Web

A minimal, fast-loading template for building simple websites and landing pages.
Perfect for showcasing information with a clean, lightweight design.

## Features

- [x] Powered by Astro, a fast and modern framework
- [x] Built with TypeScript for type safety and scalability
- [x] Tailwind CSS v4 for a utility-first styling approach
- [x] Smooth page transitions for a better user experience
- [x] SEO-friendly with best practices for search visibility
- [x] Strict CSP headers configured for enhanced security against XSS attacks
      and other vulnerabilities
- [x] Highly customizable to fit your needs
- [x] Sitemap included for automatic indexing
- [x] Optimized SVG icons for better performance
- [x] Prettier for consistent code formatting
- [x] Biome for linting and code quality
- [x] Lefthook for managing Git hooks efficiently
- [x] Production-ready with optimized performance and deployment

## Dev

```
git clone git@github.com:tinogasta-labs/quick-web.git my-awesome-web
cd my-awesome-web
pnpm install
pnpm run setup
pnpm dev
```

## Icons

This template uses SVG sprites for optimal icon performance, powered by
[vite-plugin-icons-spritesheet](https://github.com/forge-42/vite-plugin-icons-spritesheet/tree/main).

#### Icons Structure

```
├── resources/
│   └── icons/        # Raw SVG icons
└── src/
    └── components/
        └── Icon.tsx  # Icon component
```

#### Adding New Icons

Using [Sly CLI](https://sly-cli.fly.dev/):

```
npx @sly-cli/sly add @radix-ui/icons avatar pencil-1
```

The SVG files will be automatically added to `./resources/icons/`.

> You can also manually add SVG files to the `./resources/icons/` directory.

### Using Icons in Components

Icons are automatically compiled into a sprite and TypeScript types are
generated. Use them in your components like this:

```astro
---
import Icon from '~/components/ui/Icon'
---

<Icon name="avatar" class="size-5" />
```

## Performance Insights

![image](https://github.com/user-attachments/assets/c55043ba-c6d8-4dd8-b2f3-23ec141c0d49)

## Security Headers Test

![image](https://github.com/user-attachments/assets/3a17cd45-d9bf-446a-bc7a-a6549e8b1ac1)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
