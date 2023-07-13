---
to: <%= name %>/package.json
---
{
  "name": "<%= name %>",
  "version": "0.0.1",
  "main": "./build/esm/main.js",
  "module": "./build/cjs/main.js",
  "exports": {
    ".": "./build/esm/main.js",
    "./*": "./build/esm/*.js"
  },
  "scripts": {
    "build": "rimraf build && tsc -b ./tsconfig.cjs.json ./tsconfig.esm.json ./tsconfig.types.json"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "5.0.4"
  },
  "engines": {
    "node": ">=16"
  },
  "files": [
    "build",
    "CHANGELOG.md",
    "LICENSE",
    "README.md"
  ],
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  },
  "prettier": {
    "singleQuote": true
  },
  "sideEffects": false,
  "private": false
}
