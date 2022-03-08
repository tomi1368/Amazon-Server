module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true,
        "node": true
    },
    "react/prop-types" : 0,
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "cypress",
        "jest"
    ],
    "rules": {
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error",
        "cypress/no-pause": "error"
      }
}
