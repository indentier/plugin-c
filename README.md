<div align="center">

  <img src="./icon.png" width="256" height="256" alt="Indentier">

# @indentier/plugin-c

</div>

[![npm version](https://img.shields.io/npm/v/@indentier/plugin-c.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/@indentier/plugin-c)
[![CI](https://github.com/indentier/plugin-c/actions/workflows/ci.yml/badge.svg)](https://github.com/indentier/plugin-c/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> C and C++ support for [Indentier](https://github.com/indentier/indentier).

Full documentation: **[indentier.github.io](https://indentier.github.io)**

## Install

```sh
npm i -D indentier @indentier/plugin-c
```

## Setup

```jsonc
// .indentierrc.json
{
  "plugins": ["@indentier/plugin-c"]
}
```

<!-- prettier-ignore -->
| | |
|-|-|
| Language | C / C++ |
| Extensions | `.c` `.h` `.cpp` `.hpp` |
| Ruby mode | Yes — injects `void*end=0;`; end statement: `end` |

## License

[MIT](./LICENSE) © otoneko.
