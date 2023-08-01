# SvelteKit Tutorial By Sai Htet Myat Htut
## SvelteKit + TailwindCSS + TypeScript Setup

> Before you start, make sure you have the latest version of Node.js installed.
> You'll also need a recent version of npm. I recommend using npm latest, but I use npm 7.

### 1. Create a new SvelteKit project
``` npm create svelte@latest [Your Project Name] ```
### 2. Install TailwindCSS
``` npm install -D tailwindcss@latest postcss@latest autoprefixer@latest ```
### 3. Create TailwindCSS config file
``` npx tailwindcss init -p ```
This will create `tailwind.config.js` and `postcss.config.js` files in your project's root folder.
### 4. Configure TailwindCSS
Open `tailwind.config.js` and add the following code :
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
```
Open `svelte.config.js` and add the following code :
```
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;
```
### 5. Add TailwindCSS styles to your project
Create a file named app.css in the src folder and add the following code :
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 6. Import and Start Using TailwindCSS
Before we go any further, I will create a +layout.svelte file in the src/routes folder, basically a layout file that will be used by all the pages in our project. You can create a layout file in any folder you want, but I prefer to create it in the src/routes folder. And we will import the app.css file in the layout file. Now You can use TailwindCSS everywhere in your project.
```
<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
</script>
<slot/>
```