# Sass Modernization Guide

## Current Status

The stylesheet system currently uses the deprecated `@import` syntax in Sass. While this works with current versions of Sass, it will be removed in Dart Sass 3.0.0.

We've already addressed the deprecation warnings related to color functions by:
1. Adding `@use "sass:color"` at the top of files that use color functions
2. Replacing `darken()` with `color.adjust($color, $lightness: -X%)`

## Future Migration to `@use`

To fully modernize the Sass codebase, follow these steps:

### 1. Update Core Files

Create/update the following core files:

```scss
// _index.scss
@forward "variables";
@forward "mixins";
```

### 2. Update Each Partial

For each SCSS partial (like _global.scss, _nav.scss), add:

```scss
@use "index" as *;
@use "sass:color";
```

### 3. Update Main File

Replace the main file with:

```scss
// resume.scss
@use "reset";
@use "global";
@use "nav";
@use "resume-item";
@use "consulting";
@use "links";
@use "utilities";
```

### Notes and Considerations

- When using `@use`, variables, mixins, and functions need to be namespaced unless you use the `as *` syntax
- Be careful with variable scoping, as `@use` has different behavior than `@import`
- Test thoroughly after migration to ensure all styles apply correctly

## Helpful Resources

- [Sass Migrator Tool](https://sass-lang.com/documentation/cli/migrator)
- [Sass Documentation on @use](https://sass-lang.com/documentation/at-rules/use)
- [Migration Guide from @import to @use](https://sass-lang.com/blog/the-module-system-is-launched)
