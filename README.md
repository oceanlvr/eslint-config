# @oceanlvr/eslint-config

forked from [antfu/eslint-config](https://github.com/antfu/eslint-config).

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

```sh
packages
├── all                     # all configs
├── basic                   # common eslint config
├── eslint-plugin-oceanlvr  # customer plugin
├── react                   # react config
├── typescript              # typescript config
└── vue                     # vue config
```

## Usage

### Install

```bash
pnpm add -D eslint @oceanlvr/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@oceanlvr"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

MIT
