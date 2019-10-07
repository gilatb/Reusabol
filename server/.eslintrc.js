module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 2],
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "no-undef": 0,
        "no-unsued-vars": 0,
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "space-before-blocks": "error",
        "space-before-function-paren": "error"
    }
};