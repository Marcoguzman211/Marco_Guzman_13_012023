module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: "plugin:react/recommended",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};