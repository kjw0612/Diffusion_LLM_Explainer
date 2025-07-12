import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

export default defineConfig({
  plugins: [react()],
  // Use the repository name as the base path when deploying to GitHub Pages
  base: repo ? `/${repo}/` : '/',
});
