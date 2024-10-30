# svelte-github-explorer

This is a simple Svelte app to explore users and their repositories on GitHub.  
**Live demo is [here](https://onderonur.github.io/svelte-github-explorer).**

## 💻 Tech Stack

- Framework: [SvelteKit](https://kit.svelte.dev/)
- API: [GitHub API](https://docs.github.com/en/rest)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Material Icons](https://mui.com/material-ui/material-icons/)
- Linting: [ESLint](https://eslint.org/)
- Code Formatting: [Prettier](https://prettier.io/)
- Deployment: [GitHub Pages](https://pages.github.com/) (w/ [GitHub Actions](https://github.com/features/actions))

## ⌨️ Development

To start development, we should install our packages first.

```
pnpm install
```

After the installation is completed, we can run the app by:

```
pnpm dev
```

and it will start on `http://localhost:5173`.

## 🚀 Build

To create a production build, we need to run the below command first:

```
pnpm build
```

This command will create our static files in `build` folder to serve.
