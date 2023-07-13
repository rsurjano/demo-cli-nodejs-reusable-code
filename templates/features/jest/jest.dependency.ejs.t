---
inject: true
to: <%= name %>/package.json
after: devDependencies
skip_if: jest
---
    "@types/jest": "^28.0.0",
    "jest": "^28.0.0",
    "jest-junit": "^15.0.0",
    "jest-preset-angular": "^12.2.3",
