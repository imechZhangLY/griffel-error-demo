module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "@microsoft/sdl"
    ],
    parserOptions: {
        sourceType: "module",
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:@microsoft/sdl/common"
    ],
    rules: {
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "import/prefer-default-export": "off",
        "linebreak-style": 0,
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        ],
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "indent": ["off", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["off"],
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": ["off"],
        "react/require-default-props": ["warn"],
        "react/no-unused-prop-types": ["warn"],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/no-shadow": ["off"],
        "@typescript-eslint/no-empty-interface": ["warn"],
        "@typescript-eslint/ban-types": ["warn"],
        "quotes": ["error", "double"],
        "no-shadow": "off",
        "import/no-dynamic-require": 0,
        "max-len": ["error", { code: 120 }],
        "no-nested-ternary": "warn",
        "no-param-reassign": ["warn", { "props": false }],
        "no-plusplus": "warn",
        "jsx-a11y/no-static-element-interactions": "warn",
        "jsx-a11y/click-events-have-key-events": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "no-bitwise": ["error", { "allow": ["|=","&","|"] }],
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.name='makeStyles']",
                "message": "makeStyles is not allowed outside of the .style.ts file.",
            },
            "error",
            {
                "selector": "CallExpression[callee.name='makeResetStyles']",
                "message": "makeResetStyles is not allowed outside of the .style.ts file.",
            },
        ],
    },
    overrides: [
        {
            files: ["*.style.ts"],
            rules: {
                "no-restricted-syntax": "off",
            },
        },
    ],
};
