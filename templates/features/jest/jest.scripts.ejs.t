---
inject: true
to: <%= name %>/package.json
after: scripts
---
"test": "jest",
"test:watch": "jest --watch",
"test:ci": "jest --runInBand",
"test:coverage": "jest --coverage",
