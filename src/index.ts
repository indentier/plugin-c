import type { IndentierPlugin } from 'indentier';

/**
 * indentier plugin for C / C++ (.c .h .cpp .hpp)
 *
 * - Declaration: `void*end=0;`
 *   Using `0` instead of `NULL` avoids a dependency on `<stddef.h>` / `<stdlib.h>`,
 *   so the declaration can safely appear before any `#include` directives.
 * - End statement: `end`  (bare identifier; used as an expression statement in C/C++)
 * - Insertion index: top of file (index 0)
 */
const plugin: IndentierPlugin = {
  extensions: ['.c', '.h', '.cpp', '.hpp'],
  rubyCompatible: true,
  declarationTemplate: 'void*end=0;',
};

export default plugin;
