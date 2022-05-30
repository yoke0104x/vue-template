module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:vue/essential", "plugin:@typescript-eslint/recommended"],
    // "parserOptions": {
    //     "ecmaVersion": "latest",
    //     "parser": "@typescript-eslint/parser",
    //     "sourceType": "module"
    // },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        globals: {
            commonjs: true,
        },
    },
};
