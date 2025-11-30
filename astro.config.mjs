// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this with your GitHub username and repository name
  // If your repo is "username.github.io", use base: "/"
  // Otherwise, use base: "/repo-name/"
  site: 'https://YOUR_USERNAME.github.io',
  base: '/ruby-portfolio/', // Change this to "/" if repo is username.github.io
  vite: {
    plugins: [tailwindcss()]
  }
});