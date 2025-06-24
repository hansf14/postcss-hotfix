# @hansf14/postcss-hotfix

> **PostCSS Hotfix for Tailwind CSS Safari Compatibility**

Fixes **Safari rendering issues** caused by **trailing commas** in **Tailwind CSS generated variables**. This plugin ensures your **backdrop filters** and other CSS effects work consistently across all browsers.
<br />
Without this plugin, for example backdrop-filter breaks in some versions of Safari, due to the trailing commas in the generated CSS.
Using this plugin will fix this kind of issues in TailwindCSS.

## What It Fixes

This plugin automatically removes trailing commas from:
- `backdrop-filter` properties
- `filter` properties  
- Any CSS custom properties starting with `--tw-`

## Browser Support

- ✅ **Safari** - Fixes rendering issues
- ✅ **Chrome** - No impact (already worked)
- ✅ **Firefox** - No impact (already worked)
- ✅ **Edge** - No impact (already worked)

## Related Issues

- [Tailwind CSS Discussion #7044](https://github.com/tailwindlabs/tailwindcss/discussions/7044)
- Common with `backdrop-blur`, `backdrop-filter`, and filter utilities

**❌ Before (Broken in Safari)**
```css
.backdrop-filter {
  backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
}
```
![Before](https://github.com/hansf14/postcss-hotfix/blob/main/preview-screenshots/before.png)

**✅ After (Works everywhere)**
```css
.backdrop-filter {
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
```
![After](https://github.com/hansf14/postcss-hotfix/blob/main/preview-screenshots/after.png)

## Installation

```bash
# npm
npm install -D @hansf14/postcss-hotfix

# yarn
yarn add -D @hansf14/postcss-hotfix

# pnpm
pnpm add -D @hansf14/postcss-hotfix
```

## Usage

Add the plugin to your **PostCSS configuration**.
<br />
Don't forget to **restart your dev server** to apply the changes to your postcss config file!

### postcss.config.js
```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@hansf14/postcss-hotfix'),
  ],
}
```

### postcss.config.mjs
```js
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssHotfix from '@hansf14/postcss-hotfix'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssHotfix,
  ],
}
```

### Options
`debug?: boolean | undefined`

```js
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssHotfix from '@hansf14/postcss-hotfix'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssHotfix({ debug: true }),
  ],
}
```

```bash
Found Tailwind var: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)    
Fixed to: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
```
