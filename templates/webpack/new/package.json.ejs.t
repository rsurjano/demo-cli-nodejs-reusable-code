---
to: <%= name %>/package.json
---
{
  "name": "<%= name %>",
  "version": "0.0.1",
  "description": "",
  "main": "dist/bundle.js",
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
  "author": "",
  "devDependencies": {
    "typescript": "5.0.0",
    "webpack": "5.76.3",
    "webpack-cli": "5.0.1",
    "webpack-dev-server": "4.13.1"
  },
  "dependencies": {
  },
  "sideEffects": false
}

