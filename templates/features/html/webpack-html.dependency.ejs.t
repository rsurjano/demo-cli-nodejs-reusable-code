---
inject: true
to: <%= name %>/package.json
after: devDependencies
skip_if: html-webpack-plugin
---
    "html-webpack-plugin": "5.5.0",
